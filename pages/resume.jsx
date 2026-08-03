
import Head from "next/head";
import ResumePage from "@/components/page-components/ResumePage";
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

const Resume = ({...props}) => {
	const {t} = useTranslation('common');
	return (
		<>
			<Head>
				<title>{`Youri Janssen | ${t('resumePageTitle')}`}</title>
			</Head>
			<ResumePage {...props}/>
		</>
	);
};


export default Resume;
