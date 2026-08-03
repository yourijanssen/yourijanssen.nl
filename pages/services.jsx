import Head from "next/head";

import ServicesPage from "@/components/page-components/ServicesPage";
import {serverSideTranslations} from "next-i18next/pages/serverSideTranslations";
import {useTranslation} from "next-i18next/pages";

export const getStaticProps = async (context) => {
	const locale = context.locale || 'en';

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

const Services = (...props) => {
	const {t} = useTranslation('common');

	return (
		<>
			<Head>
				<title>{`Youri Janssen | ${t('servicesPageTitle')}`}</title>
			</Head>
			<ServicesPage {...props} />
		</>
	);
};

export default Services;
