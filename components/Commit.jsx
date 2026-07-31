import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next/pages";

export const Commit = () => {
	const [commitDate, setCommitDate] = useState('');
	const {t} = useTranslation('common');


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

	return (
		<>
			<div className="container mx-auto xl:text-left">
				{commitDate ? (
					<p className="text-text-light dark:text-text-dark">
						{t('commit')} {commitDate}
					</p>
				) : null}
			</div>
		</>
	)

}
