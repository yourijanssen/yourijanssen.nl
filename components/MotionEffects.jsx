import {useEffect} from 'react';
import {useRouter} from 'next/router';

/** Reveals content once on entry while keeping server-rendered content accessible. */
export default function MotionEffects() {
  const {asPath} = useRouter();
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const animations = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({target, isIntersecting}) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        const animation = target.animate([
          {opacity: 0.35, transform: 'translateY(24px)'},
          {opacity: 1, transform: 'translateY(0)'},
        ], {duration: 650, easing: 'cubic-bezier(.22,1,.36,1)'});
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, {threshold: 0.08});
    const observed = new WeakSet();
    // Include tab panels added after navigation, without replaying existing sections.
    const observeContent = () => {
      document.querySelectorAll('.hero-copy, .portrait, .section-heading, .project, .client-project, .service-row, .timeline li, .skill-year, .contact-top, .contact-bottom, [role="tabpanel"]').forEach((element) => {
        if (!observed.has(element)) {
          observed.add(element);
          observer.observe(element);
        }
      });
    };
    observeContent();
    const mutations = new MutationObserver(observeContent);
    mutations.observe(document.getElementById('main-content'), {childList: true, subtree: true});
    const stopMotion = () => {
      if (preference.matches) {
        observer.disconnect();
        mutations.disconnect();
        animations.forEach((animation) => animation.cancel());
      }
    };
    preference.addEventListener('change', stopMotion);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener('change', stopMotion);
    };
  }, [asPath]);
  return null;
}
