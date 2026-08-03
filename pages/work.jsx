import Head from "next/head";
import WorkPage from "@/components/page-components/WorkPage";
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

const Work = ({...props}) => {
	const {t} = useTranslation('common');

	return (
		<>
			<Head>
				<title>{`Youri Janssen | ${t('workPageTitle')}`}</title>
			</Head>
			<WorkPage {...props}/>
		</>
	);
};

export default Work;
