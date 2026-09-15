import {Download} from 'lucide-react';
import {useTranslation} from 'next-i18next/pages';

/** Uses a native download link that also works without JavaScript. */
export function CVDownload() {
  const {t} = useTranslation('common');
  return <a className="button button-secondary" href="/assets/CV-Youri.pdf" download="CV-Youri.pdf"><Download size={17} aria-hidden="true" />{t('downloadCV')}</a>;
}
