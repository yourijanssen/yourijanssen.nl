import Head from "next/head";

import ServicesPage from "@/components/page-components/ServicesPage";
import {serverSideTranslations} from "next-i18next/pages/serverSideTranslations";

export const getStaticProps = async (context) => {
	const locale = context.locale || 'en';

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

const Services = (...props) => {

	return (
		<>
			<Head>
				<title>Youri Janssen | Services</title>
			</Head>
			<ServicesPage {...props} />
		</>
	);
};

export default Services;
