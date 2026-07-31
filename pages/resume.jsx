
import Head from "next/head";
import ResumePage from "@/components/page-components/ResumePage";
import {serverSideTranslations} from "next-i18next/pages/serverSideTranslations";

export const getStaticProps = async (context) => {
	const locale = context.locale || 'en';

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

const Resume = ({...props}) => {
	return (
		<>
			<Head>
				<title>Youri Janssen | Resume</title>
			</Head>
			<ResumePage {...props}/>
		</>
	);
};


export default Resume;
