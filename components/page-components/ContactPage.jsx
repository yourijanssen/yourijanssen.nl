import {ArrowUpRight, MapPin} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';
import Social from '../Social';
import SectionLabel from '../SectionLabel';
import SectionHeading from '../SectionHeading';

/** Presents genuine contact channels without an unconnected form or phone details. */
export default function ContactPage({embedded = false}) {
  const {t} = useTranslation('common');
  const Heading = embedded ? 'h2' : 'h1';
  return <section className={`contact-section ${embedded ? '' : 'contact-standalone'}`}><div className="shell">
    <a className="contact-top" href="mailto:yourijanssen123@gmail.com" aria-label={t('sendEmail')}><div><SectionLabel name="contactSection">{t('contactPageTitle')}</SectionLabel><SectionHeading as={Heading} name="contactSection">{t('contactHeadline')}</SectionHeading><p className="contact-intro">{t('contactIntro')}</p></div><span className="contact-arrow" aria-hidden="true"><ArrowUpRight strokeWidth={1} /></span></a>
    <div className="contact-bottom"><a className="email-link" href="mailto:yourijanssen123@gmail.com">Yourijanssen123@gmail.com</a><span className="location"><MapPin size={17} />{t('amsterdam')}</span><Social /></div>
  </div></section>;
}
