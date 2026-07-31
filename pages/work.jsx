import Head from "next/head";
import WorkPage from "@/components/page-components/WorkPage";
import {serverSideTranslations} from "next-i18next/pages/serverSideTranslations";

export const getStaticProps = async (context) => {
	const locale = context.locale || 'en';

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

const Work = ({...props}) => {

	return (
		<>
			<Head>
				<title>Youri Janssen | Work</title>
			</Head>
			<WorkPage {...props}/>
		</>
	);
};

export default Work;
