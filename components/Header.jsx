import Link from 'next/link';
import MobileNav from './MobileNav';
import DarkModeToggle from './DarkModeToggle';
import Nav from './Nav';
import LocaleSwitcher from './LocaleSwitcher';
import {Code2} from 'lucide-react';
import {useEffect, useState} from 'react';

/** Keeps navigation and appearance controls consistent across every page. */
export default function Header() {
  const [compact, setCompact] = useState(false);

  // Separate thresholds prevent the changing header height from toggling repeatedly.
  useEffect(() => {
    /** Shrinks navigation after scrolling and restores it near the top. */
    function updateHeaderSize() {
      const scrollTop = window.scrollY;
      setCompact(current => current ? scrollTop > 16 : scrollTop > 100);
    }
    updateHeaderSize();
    window.addEventListener('scroll', updateHeaderSize, {passive: true});
    return () => window.removeEventListener('scroll', updateHeaderSize);
  }, []);

  return <header className="site-header" data-compact={compact}><div className="shell header-inner">
    <Link href="/" className="wordmark" aria-label="Youri Janssen"><Code2 size={24} aria-hidden="true" /><span className="wordmark-name">Youri</span><span className="wordmark-dot">.</span></Link>
    <div className="desktop-nav"><Nav /></div>
    <div className="header-tools"><LocaleSwitcher /><DarkModeToggle /><div className="mobile-nav"><MobileNav /></div></div>
  </div></header>;
}
