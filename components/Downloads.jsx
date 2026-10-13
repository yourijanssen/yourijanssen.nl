import {Download} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';
import {useRouter} from 'next/router';

/** Downloads the Dutch CV for Dutch visitors and the English CV for other locales. */
export function CVDownload() {
  const {t} = useTranslation('common');
  const {locale} = useRouter();
  const filename = locale === 'nl' ? 'Youri-Janssen-ResumeNL2026.pdf' : 'Youri-Janssen-ResumeEN2026.pdf';
  return <a className="button button-secondary" href={`/assets/${filename}`} download={filename}><Download size={17} aria-hidden="true" />{t('downloadCV')}</a>;
}
