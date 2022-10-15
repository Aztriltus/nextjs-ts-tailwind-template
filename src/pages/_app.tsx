import "@/common/styles/globals.scss";

import Head from "next/head";

import { CoreLayout } from "@/common/components/CoreLayout";
import { PageHead } from "@/common/components/PageHead";

export const App = ({ Component, pageProps }) => {
  const Layout = Component.layout ? Component.layout : CoreLayout;
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <PageHead />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
