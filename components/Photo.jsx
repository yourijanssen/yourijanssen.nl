import Image from 'next/image';
import {useTranslation} from 'next-i18next/pages';

/** Preserves the original portrait and prioritizes the hero image for LCP. */
export default function Photo() {
  const {t} = useTranslation('common');
  return <figure className="portrait"><div className="portrait-image">
    <Image src="/assets/profilePic.png" alt={t('portraitAlt')} fill fetchPriority="high" loading="eager" quality={85} sizes="(max-width: 700px) 90vw, 420px" />
    <svg className="portrait-ring" viewBox="0 0 506 506" fill="none" aria-hidden="true" focusable="false">
      <circle cx="253" cy="253" r="249" />
    </svg>
  </div><figcaption><span>Youri Janssen</span><span>{t('fullStack')}</span><span className="portrait-year">{t('portraitYear', {year: 2019})}</span></figcaption></figure>;
}
