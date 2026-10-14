import {useEffect, useRef, useState} from 'react';

/** Coordinates the loading command and reveal of the entire containing section. */
export default function SectionHeading({as: Heading = 'h2', name, section, children}) {
  const headingRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const element = headingRef.current.closest('section');
    let cancelled = false;
    let presentationTimer;
    /** Keeps the loading state of the title and all section content in sync. */
    function updateLoading(value) {
      element?.toggleAttribute('data-section-loading', value);
      setLoading(value);
    }
    const observer = new IntersectionObserver(async entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      updateLoading(true);
      try {
        // Keep the command readable even when cached assets are ready immediately.
        await Promise.all([
          section.load(element),
          new Promise(resolve => { presentationTimer = window.setTimeout(resolve, 800); }),
        ]);
      } finally {
        if (!cancelled) updateLoading(false);
      }
    }, {threshold: 0.3});
    observer.observe(headingRef.current);
    /** Reveals the real title immediately if the visitor turns off animations. */
    function finishLoading() {
      if (!preference.matches) return;
      observer.disconnect();
      cancelled = true;
      window.clearTimeout(presentationTimer);
      updateLoading(false);
    }
    preference.addEventListener('change', finishLoading);
    return () => {
      observer.disconnect();
      cancelled = true;
      window.clearTimeout(presentationTimer);
      element?.removeAttribute('data-section-loading');
      preference.removeEventListener('change', finishLoading);
    };
  }, [name, section]);

  return <Heading ref={headingRef} className="section-load-heading" data-loading={loading}>
    <span className="section-load-title">{children}</span>
    {loading ? <code className="section-load-command" aria-hidden="true"><span className="section-code-keyword">await</span>{' '}{name}.<span className="section-code-function">load</span>(element);<span className="section-load-cursor">▍</span></code> : null}
  </Heading>;
}
