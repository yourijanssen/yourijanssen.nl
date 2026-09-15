import {useTranslation} from 'next-i18next/pages';
import {useEffect, useRef} from 'react';

/** Counts once when visible; assistive technology always receives the final total. */
function CountingValue({value}) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      // Ease out to the verified total without changing the layout width.
      const tick = (now) => {
        const progress = Math.min((now - start) / 1600, 1);
        element.textContent = `${Math.round(value * (1 - Math.pow(1 - progress, 3)))}+`;
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, {threshold: 0.5});
    observer.observe(element);
    const stop = () => {
      if (preference.matches) {
        observer.disconnect();
        cancelAnimationFrame(frame);
        element.textContent = `${value}+`;
      }
    };
    preference.addEventListener('change', stop);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      preference.removeEventListener('change', stop);
    };
  }, [value]);
  return <dd><span className="sr-only">{value}+</span><span ref={ref} aria-hidden="true" className="counting-value" style={{minWidth: `${String(value).length + 1}ch`}}>{value}+</span></dd>;
}

/** Renders meaningful statistics immediately, including when motion is disabled. */
export default function Stats() {
  const {t} = useTranslation('common');
  return <div className="shell"><dl className="stats-strip">{[[4, 'yearsOfExperience'], [20, 'projectsCompleted'], [10, 'technologiesMastered']].map(([value, key]) =>
    <div key={key}><CountingValue value={value}/><dt>{t(key)}</dt></div>
  )}</dl></div>;
}
