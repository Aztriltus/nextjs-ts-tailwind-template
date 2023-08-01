import '@/common/styles/globals.scss';

import { type NextComponentType } from 'next';
import { type AppProps } from 'next/app';

import { CoreLayout } from '@/common/components/CoreLayout';
import { PageHead } from '@/common/components/PageHead';

type ComponentProps = {
  layout?: () => JSX.Element;
} & NextComponentType;

export const App = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as ComponentProps).layout ?? CoreLayout;
  return (
    <>
      <PageHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
