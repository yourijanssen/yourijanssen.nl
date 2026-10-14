import Link from 'next/link';
import SectionLabel from '../SectionLabel';
import SectionHeading from '../SectionHeading';
import {useMemo} from 'react';
import {createSection} from '@/lib/section.mjs';
import {ArrowUpRight} from 'lucide-react';
import {Trans} from 'react-i18next';
import {useTranslation} from 'next-i18next/pages';

/** Gives each service a readable row with a direct route to discuss a project. */
export default function ServicesPage({embedded = false}) {
  const {t} = useTranslation('common');
  const Heading = embedded ? 'h2' : 'h1';
  const label = t('servicesPageTitle');
  const servicesSection = useMemo(() => createSection(label), [label]);
  return <section className="section services-section shell"><div className="section-heading"><div><SectionLabel name="servicesSection" section={servicesSection} /><SectionHeading as={Heading} name="servicesSection" section={servicesSection}>{t('servicesHeadline')}</SectionHeading></div><p>{t('servicesIntro')}</p></div>
    <div className="service-list">{[['long', 'longdes'], ['custom', 'customdes'], ['interface', 'interfacedes']].map(([title, description], index) =>
      <Link href="/contact" className="service-row" key={title} aria-label={`${t('discussService')}: ${t(title)}`}><span className="service-number">0{index + 1}</span><h3>{t(title)}</h3><div className="service-description"><Trans i18nKey={description} t={t} components={{br: <br />}} /></div><span className="round-link" aria-hidden="true"><ArrowUpRight size={22} /></span></Link>
    )}</div>
  </section>;
}
