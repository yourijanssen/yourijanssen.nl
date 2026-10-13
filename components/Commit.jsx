import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next/pages";

/** Displays the last release commit time using the active language. */
export const Commit = () => {
	const [commitDate, setCommitDate] = useState('');
	const {t, i18n} = useTranslation('common');


	useEffect(() => {
		const controller = new AbortController();

		/** Loads immutable build metadata without calling a server-side process. */
		const fetchCommitDate = async () => {
			try {
				const response = await fetch('/commit-date.json', {signal: controller.signal});
				if (!response.ok) return;

				const data = await response.json();
				if (typeof data.commitDate === 'string') setCommitDate(data.commitDate);
			} catch (error) {
				if (error.name !== 'AbortError') console.error('Unable to load commit metadata');
			}
		};

		void fetchCommitDate();
		return () => controller.abort();
	}, []);

	const date = new Date(commitDate);
	if (!commitDate || Number.isNaN(date.getTime())) return null;
	const label = new Intl.DateTimeFormat(i18n.language || 'en', {
		year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',
		timeZone: 'Europe/Amsterdam', timeZoneName: 'short',
	}).format(date);
	return <small className="footer-updated">{t('commit')} <time dateTime={commitDate}>{label}</time></small>;

}
