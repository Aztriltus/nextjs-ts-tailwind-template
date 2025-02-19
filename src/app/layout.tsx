import { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import { CoreLayout } from '@/common/components/CoreLayout';
import { inter } from '@/common/fonts';
import { cn } from '@/common/functions/cn';
import '@/common/styles/main.css';

export const viewport: Viewport = {
  themeColor: 'black',
};

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

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <html className={cn(inter.variable)} lang="en">
      <meta content="VAPI" name="apple-mobile-web-app-title" />
      <body>
        <CoreLayout>{children}</CoreLayout>
      </body>
    </html>
  );
};

export default GlobalLayout;
