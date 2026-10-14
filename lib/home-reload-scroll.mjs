/** Runs before hydration to prevent late browser scroll restoration on homepage reloads. */
export function installHomeReloadScroll() {
  const path = window.location.pathname;
  const navigation = window.performance.getEntriesByType('navigation')[0];
  const isReload = navigation?.type === 'reload' || (!navigation && window.performance.navigation?.type === 1);
  if (!/^\/(?:nl\/?|el\/?)?$/.test(path) || window.location.hash || !isReload) return;
  const previousRestoration = window.history.scrollRestoration;
  let frame;
  let stopped = false;
  window.history.scrollRestoration = 'manual';

  /** Uses non-animated scrolling, including Safari versions that restore after load. */
  function resetScroll() {
    if (stopped || window.location.pathname !== path || window.location.hash) return;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousBehavior;
  }

  /** Rechecks after the browser has presented the document, not just React hydration. */
  function handlePageShow(event) {
    if (event.persisted) {
      stopRestorationGuard();
      return;
    }
    resetScroll();
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(resetScroll);
  }

  /** Stops immediately on user input or navigation so intentional scrolling stays untouched. */
  function stopRestorationGuard() {
    stopped = true;
    window.cancelAnimationFrame(frame);
    window.history.scrollRestoration = previousRestoration;
    window.removeEventListener('pageshow', handlePageShow);
    window.removeEventListener('load', resetScroll);
    window.removeEventListener('pagehide', stopRestorationGuard);
    for (const type of ['touchstart', 'pointerdown', 'wheel', 'keydown']) {
      window.removeEventListener(type, stopRestorationGuard, true);
    }
  }

  resetScroll();
  window.addEventListener('pageshow', handlePageShow);
  window.addEventListener('load', resetScroll, {once: true});
  window.addEventListener('pagehide', stopRestorationGuard, {once: true});
  for (const type of ['touchstart', 'pointerdown', 'wheel', 'keydown']) {
    window.addEventListener(type, stopRestorationGuard, {capture: true, passive: true, once: true});
  }
}
