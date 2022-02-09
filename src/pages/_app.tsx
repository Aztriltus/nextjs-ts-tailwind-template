import PageHead from "@/modules/common/components/PageHead";
import "@/styles/globals.css";
import Head from "next/head";

export const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <PageHead />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default App;
