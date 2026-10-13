import Head from 'next/head';
import Link from 'next/link';
import {ArrowLeft, ArrowUpRight} from 'lucide-react';
import {serverSideTranslations} from 'next-i18next/pages/serverSideTranslations';
import {useTranslation} from 'next-i18next/pages';

/** Renders a localized recovery page when a requested route does not exist. */
export default function NotFoundPage() {
  const {t} = useTranslation('common');

  return <>
    <Head>
      <title>{`404 | Youri Janssen`}</title>
      <meta name="robots" content="noindex" />
    </Head>
    <section className="not-found shell" aria-labelledby="not-found-title">
      <div className="not-found-copy">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 id="not-found-title">{t('notFoundTitle')}</h1>
        <p>{t('notFoundIntro')}</p>
        <div className="not-found-actions">
          <Link className="button button-primary" href="/"><ArrowLeft size={18} />{t('notFoundHome')}</Link>
          <Link className="button button-secondary" href="/work">{t('notFoundWork')}<ArrowUpRight size={18} /></Link>
        </div>
      </div>
      <div className="not-found-marker" aria-hidden="true"><span /><i /><i /></div>
    </section>
  </>;
}

/** Loads the shared namespace for the active locale, including global navigation. */
export async function getStaticProps({locale = 'en'}) {
  return {props: {...await serverSideTranslations(locale, ['common'])}};
}
