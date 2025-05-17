import type { Metadata } from 'next';
import '@repo/ui/styles/global.scss';
import Header from '../src/layout/header';
import styles from './style.module.scss';
import '../src/styles/globals.scss';
import TanstackQueryClientProvider from '../src/provider/queryClientProvider';

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
        <TanstackQueryClientProvider>
          <Header />
          <main className={styles.main}>{children}</main>
        </TanstackQueryClientProvider>
      </body>
    </html>
  );
}
