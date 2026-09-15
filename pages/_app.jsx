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

function App({ Component, pageProps }) {
	const {t} = useTranslation('common');
	return (
		<DarkModeProvider>
			<MotionConfig reducedMotion="user">
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
