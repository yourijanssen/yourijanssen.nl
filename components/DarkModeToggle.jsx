// components/DarkModeToggle.jsx
import React from 'react';
import { useDarkMode } from '@/context/DarkModeContext';
import { BiMoon, BiSun } from 'react-icons/bi';
import {useTranslation} from "next-i18next/pages";

const DarkModeToggle = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const {t} = useTranslation('common');

	return (
		<button
			onClick={toggleDarkMode}
			className={`py-1 px-2 rounded-full ${
				isDarkMode ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"
			}`}
			aria-label={isDarkMode ? t('switchToLightMode') : t('switchToDarkMode')}
		>
			{isDarkMode ? <BiSun size={24}/> : <BiMoon size={24}/>}
		</button>
	);
};

export default DarkModeToggle;
