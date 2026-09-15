import {ArrowUpRight, MapPin} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';
import Social from '../Social';

/** Presents genuine contact channels without an unconnected form or phone details. */
export default function ContactPage({embedded = false}) {
  const {t} = useTranslation('common');
  const Heading = embedded ? 'h2' : 'h1';
  return <section className={`contact-section ${embedded ? '' : 'contact-standalone'}`}><div className="shell">
    <div className="contact-top"><div><p className="section-label">{t('contactPageTitle')}</p><Heading>{t('contactHeadline')}</Heading><p className="contact-intro">{t('contactIntro')}</p></div><a className="contact-arrow" href="mailto:yourijanssen123@gmail.com" aria-label={t('sendEmail')}><ArrowUpRight strokeWidth={1} /></a></div>
    <div className="contact-bottom"><a className="email-link" href="mailto:yourijanssen123@gmail.com">yourijanssen123@gmail.com</a><span className="location"><MapPin size={17} />Amsterdam</span><Social /></div>
  </div></section>;
}
