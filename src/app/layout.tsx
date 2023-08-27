import { Roboto, Alfa_Slab_One } from 'next/font/google';
import type { Metadata } from 'next';
import 'styles/slick/slick.css';
import 'styles/slick/slick.theme.css';
import 'styles/grid.css';
import 'styles/globals.css';
import 'styles/ui.css';
// components
import { Footer, Navbar } from 'components/app';

const alfaSlabOne = Alfa_Slab_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alfa',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Montreal',
  description: 'Montreal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${alfaSlabOne.variable} ${roboto.variable}`}>
      <body>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
