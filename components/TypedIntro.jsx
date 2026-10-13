import {useEffect, useRef} from 'react';

/** Types the introduction once per load while preserving full text and stable layout. */
export default function TypedIntro({text}) {
  const outputRef = useRef(null);

  useEffect(() => {
    const output = outputRef.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    const characters = Array.from(text);
    const duration = Math.min(5000, Math.max(1600, characters.length * 12));
    let frame;
    let start;
    let previousCount = -1;
    output.textContent = '';
    output.classList.add('is-typing');

    /** Reveals complete Unicode characters using elapsed time rather than recurring timers. */
    function tick(now) {
      start ??= now;
      const count = Math.min(characters.length, Math.floor((now - start) / duration * characters.length));
      if (count !== previousCount) {
        output.textContent = characters.slice(0, count).join('');
        previousCount = count;
      }
      if (count < characters.length) frame = requestAnimationFrame(tick);
      else output.classList.remove('is-typing');
    }

    /** Immediately restores the full copy when motion is reduced or the effect is cleaned up. */
    function finish() {
      cancelAnimationFrame(frame);
      output.textContent = text;
      output.classList.remove('is-typing');
    }

    /** Responds to a motion preference change while typing is underway. */
    function handlePreferenceChange() {
      if (preference.matches) finish();
    }

    frame = requestAnimationFrame(tick);
    preference.addEventListener('change', handlePreferenceChange);
    return () => {
      finish();
      preference.removeEventListener('change', handlePreferenceChange);
    };
  }, [text]);

  return <span className="typed-intro">
    <span className="sr-only">{text}</span>
    <span className="typing-layout" aria-hidden="true">{text}</span>
    <span className="typing-output" ref={outputRef} aria-hidden="true">{text}</span>
  </span>;
}
