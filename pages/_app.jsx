import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/Header';
import {Footer} from '@/components/Footer';
import {MotionConfig} from 'framer-motion';
import {useTranslation} from 'next-i18next/pages';
import { DarkModeProvider } from '@/context/DarkModeContext';
import nextI18NextConfig from '../next-i18next.config';
import {appWithTranslation} from "next-i18next/pages";
import MotionEffects from '@/components/MotionEffects';
import Head from 'next/head';
import {useRouter} from 'next/router';

// Build stable official URLs for each language without tracking parameters.
function localizedPageUrl(path, locale) {
	const prefix = locale === 'en' ? '' : `/${locale}`;
	return `https://www.yourijanssen.nl${prefix}${path === '/' && prefix ? '' : path}`;
}

function App({ Component, pageProps }) {
	const {t} = useTranslation('common');
	const router = useRouter();
	const publicPage = ['/', '/contact', '/resume', '/services', '/work'].includes(router.pathname);
	return (
		<DarkModeProvider>
			{publicPage && <Head>
				<link rel="canonical" href={localizedPageUrl(router.pathname, router.locale || 'en')} key="canonical" />
				{['en', 'nl', 'el'].map(locale => <link key={`alternate-${locale}`} rel="alternate" hrefLang={locale} href={localizedPageUrl(router.pathname, locale)} />)}
				<link rel="alternate" hrefLang="x-default" href={localizedPageUrl(router.pathname, 'en')} key="alternate-default" />
			</Head>}
			<MotionConfig reducedMotion="user">
				<MotionEffects />
				<a className="skip-link" href="#main-content">{t('skipToContent')}</a>
				<Header />
				<main id="main-content" tabIndex={-1}><Component {...pageProps} /></main>
				<Footer />
			</MotionConfig>
			<Analytics />
			<SpeedInsights />
		</DarkModeProvider>
	);
}

export default appWithTranslation(App, nextI18NextConfig);
