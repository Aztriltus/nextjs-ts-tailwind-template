import type { PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';

import { inter } from '@/common/fonts/inter';
import { cn } from '@/common/functions/cn';

import '@/common/styles/main.css';

export const viewport: Viewport = {
  themeColor: 'black',
}


export const metadata: Metadata = {
  title: 'Your App Name | Home',
  description: 'Your app description',
  metadataBase: new URL('https://google.com'),
  openGraph: {
    title: 'Your App Name',
    description: 'Your app description',
    url: 'https://google.com',
    siteName: 'Your App Name',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@username',
    creator: '@username',
  },
};

const GlobalLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <html className={cn(inter.variable)} lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default GlobalLayout;
