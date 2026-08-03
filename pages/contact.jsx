import Head from "next/head";
import ContactPage from "@/components/page-components/ContactPage";
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

const Contact = ({...props}) => {
	const {t} = useTranslation('common');

	return (
		<>
			<Head>
				<title>{`Youri Janssen | ${t('contactPageTitle')}`}</title>
			</Head>
			<ContactPage {...props}/>
		</>
	);
};

export default Contact;
