import Head from 'next/head';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';
import {serverSideTranslations} from 'next-i18next/pages/serverSideTranslations';
import {CVDownload} from '@/components/Downloads';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import WorkPage from '@/components/page-components/WorkPage';
import ResumePage from '@/components/page-components/ResumePage';
import ServicesPage from '@/components/page-components/ServicesPage';
import ContactPage from '@/components/page-components/ContactPage';

/** Introduces the portfolio with real work and a clear path to contact. */
export default function Home() {
  const {t} = useTranslation('common');
  return <>
    <Head><title>Youri Janssen | {t('fullStack')}</title><meta name="description" content={t('heroIntro')} /></Head>
    <section className="hero shell"><div className="hero-copy">
      <h1>{t('heroTitle')}<br /><span>{t('heroTitleAccent')}</span></h1>
      <p>{t('heroIntro')}</p>
      <div className="hero-actions"><Link className="button button-primary" href="/work">{t('exploreWork')}<ArrowUpRight size={18} /></Link><CVDownload /></div>
    </div><Photo /></section>
    <Stats />
    <WorkPage embedded />
    <ResumePage embedded />
    <ServicesPage embedded />
    <ContactPage embedded />
  </>;
}

/** Supplies both supported languages at build time. */
export async function getStaticProps({locale = 'en'}) {
  return {props: {...await serverSideTranslations(locale, ['common'])}};
}
