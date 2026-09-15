import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next/pages';

export const navigation = [['home', '/'], ['work', '/work'], ['resume', '/resume'], ['services', '/services'], ['contact', '/contact']];

/** Uses the locale-independent route to identify the current navigation item. */
export default function Nav() {
  const {pathname} = useRouter();
  const {t} = useTranslation('common');
  return <nav className="main-nav" aria-label={t('mainNavigation')}>{navigation.map(([key, href]) =>
    <Link href={href} key={key} aria-current={pathname === href ? 'page' : undefined}>{t(key)}</Link>
  )}</nav>;
}
