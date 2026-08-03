import { useTranslation } from 'next-i18next/pages'

export const Footer = () => {
	const { t } = useTranslation('common')

	return (
		<footer>
			<p>{t('footerDescription')}</p>
		</footer>
	)
}
