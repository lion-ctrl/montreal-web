import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// icons
import { FacebookIcon, InstagramIcon, LogoIcon } from 'components/icons';
// styles
import { colors } from 'styles/variables';

export const Footer = () => {
  return (
    <footer
      className="py-10 px-16 relative"
      style={{ borderTop: `20px solid ${colors.color1}` }}
    >
      <div className="relative hg-48 z-10">
        <div style={{ height: '120px' }}>
          <LogoIcon />
        </div>
        <div className="flex flex-col md:flex-row hg-16 items-center justify-center mt-4 md:mt-8 mb-8">
          <Link
            href={'/aviso-legal'}
            className="font-bold mb-4 md:mr-10 md:mb-0 text-center hover:underline"
            style={{ color: colors.color1 }}
          >
            Aviso legal
          </Link>
          <Link
            href={'/contactanos'}
            className="font-bold text-center hover:underline"
            style={{ color: colors.color1 }}
          >
            Contáctanos
          </Link>
        </div>
        <div className="flex items-center justify-center my-4">
          <a
            className="mr-10 p-2 rounded-full w-10"
            href="#"
            rel="noreferrer noopener"
            style={{ backgroundColor: colors.color1 }}
            target="_blank"
          >
            <FacebookIcon fill={colors.white} />
          </a>
          <a
            className="p-2 rounded-full w-10"
            href="#"
            rel="noreferrer noopener"
            style={{ backgroundColor: colors.color1 }}
            target="_blank"
          >
            <InstagramIcon fill={colors.white} />
          </a>
        </div>
        <p className="font-bold text-center" style={{ color: colors.color1 }}>
          2023 &copy; Todos los derechos reservados.
        </p>
      </div>
      <Image
        src={'/assets/images/cream-bg.jpg'}
        alt="footer-image"
        fill
        style={{ objectFit: 'cover' }}
      />
    </footer>
  );
};
