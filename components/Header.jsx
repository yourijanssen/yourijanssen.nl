import Link from 'next/link';
import MobileNav from './MobileNav';
import DarkModeToggle from './DarkModeToggle';
import Nav from './Nav';
import LocaleSwitcher from './LocaleSwitcher';

/** Keeps navigation and appearance controls consistent across every page. */
export default function Header() {
  return <header className="site-header"><div className="shell header-inner">
    <Link href="/" className="wordmark" aria-label="Youri Janssen">Youri<span>.</span></Link>
    <div className="desktop-nav"><Nav /></div>
    <div className="header-tools"><LocaleSwitcher /><DarkModeToggle /><div className="mobile-nav"><MobileNav /></div></div>
  </div></header>;
}
