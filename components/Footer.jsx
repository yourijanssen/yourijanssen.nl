import { useTranslation } from 'next-i18next/pages'

export const Footer = () => {
	const { t } = useTranslation('footer')

	return (
		<footer>
			<p>{t('description')}</p>
		</footer>
	)
}
