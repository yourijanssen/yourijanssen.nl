import {useEffect, useRef, useState} from 'react';

/** Coordinates the loading command and reveal of the entire containing section. */
export default function SectionHeading({as: Heading = 'h2', name, children}) {
  const headingRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const section = headingRef.current.closest('section');
    let timer;
    /** Keeps the loading state of the title and all section content in sync. */
    function updateLoading(value) {
      section?.toggleAttribute('data-section-loading', value);
      setLoading(value);
    }
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      updateLoading(true);
      timer = window.setTimeout(() => updateLoading(false), 700);
    }, {threshold: 0.3});
    observer.observe(headingRef.current);
    /** Reveals the real title immediately if the visitor turns off animations. */
    function finishLoading() {
      if (!preference.matches) return;
      observer.disconnect();
      window.clearTimeout(timer);
      updateLoading(false);
    }
    preference.addEventListener('change', finishLoading);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      section?.removeAttribute('data-section-loading');
      preference.removeEventListener('change', finishLoading);
    };
  }, [name]);

  return <Heading ref={headingRef} className="section-load-heading" data-loading={loading}>
    <span className="section-load-title">{children}</span>
    {loading ? <code className="section-load-command" aria-hidden="true"><span className="section-code-keyword">await</span>{' '}{name}.load();<span className="section-load-cursor">▍</span></code> : null}
  </Heading>;
}
