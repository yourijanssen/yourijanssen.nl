import {useEffect, useRef, useState} from 'react';
import {ChevronLeft, ChevronRight, Pause, Play} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';
import Photo from './Photo';
import CodeProfile from './CodeProfile';

/** Shows the portrait for 70% and code for 30% of each twelve-second automatic cycle. */
export default function HeroCarousel() {
  const {t} = useTranslation('common');
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [editing, setEditing] = useState(false);
  const swipeStart = useRef(null);
  const labels = [t('heroPortraitSlide'), t('heroCodeSlide')];

  // Restart the selected slide's duration after manual changes; clean up on pause or unmount.
  useEffect(() => {
    if (paused || editing) return;
    const timer = window.setTimeout(() => setSlide(current => 1 - current), slide === 0 ? 8400 : 3600);
    return () => window.clearTimeout(timer);
  }, [slide, paused, editing]);

  /** Wraps the two slides while preserving the selected code tab. */
  function changeSlide() {
    setSlide(current => 1 - current);
  }

  /** Records a single-finger gesture without interfering with controls or native scrolling. */
  function startSwipe(event) {
    swipeStart.current = null;
    if (event.touches.length !== 1 || event.target.closest('button, a, input, select, textarea')) return;
    const touch = event.touches[0];
    const panel = event.target.closest('.editor-panel');
    swipeStart.current = {
      x: touch.clientX, y: touch.clientY, id: touch.identifier, slide, panel,
      scrollLeft: panel?.scrollLeft, scrollTop: panel?.scrollTop,
    };
  }

  /** Changes slides only for deliberate horizontal swipes that are not scrolling code. */
  function endSwipe(event) {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start || event.touches.length || start.slide !== slide) return;
    const touch = Array.from(event.changedTouches).find(item => item.identifier === start.id);
    if (!touch) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (start.panel) {
      const panel = start.panel;
      const canScroll = dx < 0
        ? start.scrollLeft + panel.clientWidth < panel.scrollWidth - 1
        : start.scrollLeft > 1;
      if (canScroll || Math.abs(panel.scrollLeft - start.scrollLeft) > 1 || Math.abs(panel.scrollTop - start.scrollTop) > 1) return;
    }
    changeSlide();
  }

  /** Discards cancelled or multi-touch gestures, such as pinch-to-zoom. */
  function cancelSwipe() {
    swipeStart.current = null;
  }

  return <section className="hero-carousel" aria-label={t('heroCarouselLabel')} aria-roledescription={t('heroCarouselDescription')}>
    <div className="hero-carousel-stage" onTouchStart={startSwipe} onTouchEnd={endSwipe} onTouchCancel={cancelSwipe}
      onFocusCapture={event => { if (event.target.matches('textarea')) setEditing(true); }}
      onBlurCapture={event => { if (event.target.matches('textarea')) setEditing(false); }}>
      <div className="hero-carousel-slide hero-carousel-photo" id="hero-slide-0" role="group" aria-label={labels[0]} hidden={slide !== 0}><Photo /></div>
      <div className="hero-carousel-slide" id="hero-slide-1" role="group" aria-label={labels[1]} hidden={slide !== 1}><CodeProfile /></div>
      <button className="icon-button carousel-arrow carousel-arrow-previous" type="button" onClick={changeSlide} aria-label={t('heroPreviousSlide')}><ChevronLeft size={17} aria-hidden="true" /></button>
      <button className="icon-button carousel-arrow carousel-arrow-next" type="button" onClick={changeSlide} aria-label={t('heroNextSlide')}><ChevronRight size={17} aria-hidden="true" /></button>
      <button className="icon-button carousel-playback" type="button" onClick={() => setPaused(current => !current)} aria-label={t(paused ? 'heroResumeCarousel' : 'heroPauseCarousel')}>
        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      </button>
    </div>
    <span className="sr-only" aria-live={paused ? 'polite' : 'off'} aria-atomic="true">{labels[slide]} — {slide + 1} / 2</span>
  </section>;
}
