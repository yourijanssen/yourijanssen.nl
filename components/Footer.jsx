import Link from 'next/link';
import {ArrowUp} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';
import {Commit} from './Commit';

/** Finishes each route with a compact, consistent portfolio signature. */
export function Footer() {
  const {t} = useTranslation('common');
  return <footer className="site-footer"><div className="shell footer-inner"><Link href="/" className="wordmark"><span className="wordmark-name">Youri</span><span className="wordmark-dot">.</span></Link><div className="footer-meta"><p>{t('footerDescription')}</p><p className="footer-powered">{t('poweredBy')}{' '}<a href="https://react.dev/">React</a><span aria-hidden="true"> · </span><a href="https://nextjs.org/">Next.js</a><span aria-hidden="true"> · </span><a href="https://vercel.com/">Vercel</a></p><Commit /></div><a href="#main-content">{t('backToTop')}<ArrowUp size={15} /></a></div></footer>;
}
