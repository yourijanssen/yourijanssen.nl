import {Sheet, SheetContent, SheetTrigger, SheetTitle} from './ui/sheet';
import {Menu, ArrowUpRight} from 'lucide-react';
import Link from 'next/link';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next/pages';
import {navigation} from './Nav';

/** Provides a keyboard-accessible mobile drawer that closes after navigation. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const {t} = useTranslation('common');
  const {pathname} = useRouter();
  return <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild><button className="icon-button" aria-label={t('openMenu')}><Menu size={21} /></button></SheetTrigger>
    <SheetContent className="mobile-drawer" closeLabel={t('closeMenu')} aria-describedby={undefined}>
      <SheetTitle className="sr-only">{t('mainNavigation')}</SheetTitle>
      <Link href="/" className="wordmark" onClick={() => setOpen(false)}>Youri<span>.</span></Link>
      <nav aria-label={t('mainNavigation')}>{navigation.map(([key, href]) =>
        <Link href={href} key={key} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{t(key)}<ArrowUpRight size={24} /></Link>
      )}</nav>
    </SheetContent>
  </Sheet>;
}
