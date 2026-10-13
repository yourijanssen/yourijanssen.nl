import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Pause, Play} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';
import Photo from './Photo';
import CodeProfile from './CodeProfile';

/** Shows the portrait for 70% and code for 30% of each twelve-second automatic cycle. */
export default function HeroCarousel() {
  const {t} = useTranslation('common');
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const labels = [t('heroPortraitSlide'), t('heroCodeSlide')];

  // Restart the selected slide's duration after manual changes; clean up on pause or unmount.
  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => setSlide(current => 1 - current), slide === 0 ? 8400 : 3600);
    return () => window.clearTimeout(timer);
  }, [slide, paused]);

  /** Wraps the two slides while preserving the selected code tab. */
  function changeSlide() {
    setSlide(current => 1 - current);
  }

  return <section className="hero-carousel" aria-label={t('heroCarouselLabel')} aria-roledescription={t('heroCarouselDescription')}>
    <div className="hero-carousel-stage">
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
