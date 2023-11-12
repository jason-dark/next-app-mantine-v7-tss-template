import type { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { theme } from '@/lib/theme';
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: 'Mantine V7 Nextjs 14 with TSS',
  description:
    'This repo can be used as a template for using Mantine V7 in a Nextjs 14 project with TSS for styling.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript defaultColorScheme='dark' />
      </head>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          <MantineProvider defaultColorScheme='dark' theme={theme}>
            {children}
          </MantineProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
