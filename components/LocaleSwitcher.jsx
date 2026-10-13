import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next/pages';

/** Switches language without losing the current route. */
export default function LocaleSwitcher() {
  const router = useRouter();
  const {t} = useTranslation('common');
  return <select aria-label={t('selectLanguage')} value={router.locale} onChange={event => router.push(router.asPath, router.asPath, {locale: event.target.value})} className="locale-select"><option value="en" lang="en">EN</option><option value="nl" lang="nl">NL</option><option value="el" lang="el">ΕΛ</option></select>;
}
