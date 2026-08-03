"use client";

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import {Button} from "@/components/ui/button";
import {useTranslation} from "next-i18next/pages";

const CVUrl = '/assets/CV-Youri.pdf';

const CVDownload= () => {
	const {t} = useTranslation('common');

	const handleDownload = () => {
		const anchor = document.createElement('a');
		anchor.href = CVUrl;
		anchor.download = 'CV-Youri.pdf'; // Specify the file name for the download
		anchor.click();
	};

	return (
		<Button
			variant="outline"
			size="lg"
			className="uppercase flex items-center gap-2"
			onClick={handleDownload}
		>
			<span>{t('downloadCV')}</span>
			<FiDownload className="text-xl" />
		</Button>
	);
};

export { CVDownload };
