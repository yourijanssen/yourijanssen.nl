"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import {useState} from "react";
import {useTranslation} from "next-i18next/pages";

const links = [
  {
    nameKey: "home",
    path: "/",
  },
  {
    nameKey: "services",
    path: "/services",
  },
  {
    nameKey: "resume",
    path: "/resume",
  },
  {
    nameKey: "work",
    path: "/work",
  },
  {
    nameKey: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const {t} = useTranslation('common');

  const closeSheet = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="flex justify-center items-center" aria-label={t('openMenu')}>
            <CiMenuFries className="text-[32px] text-accent" />
          </button>
        </SheetTrigger>
        <SheetContent
          className="flex flex-col bg-primary-light dark:bg-primary-dark"
          closeLabel={t('closeMenu')}
        >
          {/* logo */}
          <div className="mt-32 mb-40 text-center text-2xl bg-light dark:bg-dark">
            <Link href="/">
              <h1 className="text-4xl font-semibold text-text-light dark:text-text-dark" onClick={closeSheet}>
                Youri<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          {/* nav */}
          <nav className="flex flex-col justify-center items-center gap-8 text-text-light dark:text-text-dark">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`${
                        link.path === pathname &&
                        "text-accent border-b-2 border-accent"
                    } text-xl capitalize hover:text-accent transition-all`}
                    onClick={closeSheet}
                >
                  {t(link.nameKey)}
                </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
  );
};

export default MobileNav;
