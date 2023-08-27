'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
// components
import { LogoIcon } from 'components/icons';
// hooks
import { useVW } from 'hooks';
// variables
import { breakpoints } from 'styles/variables';

export const Navbar = () => {
  const pathName = usePathname();
  const vw = useVW();

  const lastScrollY = useRef(0);
  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      setShow(window.scrollY < lastScrollY.current);
      lastScrollY.current = window.scrollY;
    }
  };

  useEffect(() => {
    if (vw < breakpoints.md) return;
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vw]);

  return (
    <motion.nav
      className="nav box-shadow"
      initial={false}
      transition={{ bounce: 0, type: 'spring', duration: 0.2, delay: 0.2 }}
      animate={{
        y: show ? '0%' : '-100%',
      }}
    >
      <div className="nav_container container">
        <Link href="/" className="nav_logo">
          <LogoIcon />
        </Link>
        <div
          className={`nav_hamburger-lines ${showMenu ? 'active' : ''}`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul
          className={`nav_menu-items ${showMenu ? 'active' : ''}`}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          {[
            { id: 1, href: '/', name: 'Inicio' },
            { id: 2, href: '/productos', name: 'Productos' },
            { id: 3, href: '/recetas', name: 'Recetas' },
            { id: 4, href: '/contactanos', name: 'Contactanos' },
          ].map(({ id, href, name }) => (
            <li
              key={id}
              className={pathName === href ? 'active' : 'not-active'}
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
