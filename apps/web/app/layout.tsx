import type { Metadata } from 'next';
import '@repo/ui/styles/global.scss';
import Header from '../src/layout/header';
import styles from './style.module.scss';

export const metadata: Metadata = {
  title: 'OpenyourPlan',
  description: 'frontend assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
