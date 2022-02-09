import { CoreLayout } from "@/modules/common/components/CoreLayout";
import PageHead from "@/modules/common/components/PageHead";
import "@/styles/globals.scss";
import Head from "next/head";

export const App = ({ Component, pageProps }) => {
  const Layout = Component.layout ? Component.layout : CoreLayout;
  return (
    <>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <PageHead />
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
};

export default App;
