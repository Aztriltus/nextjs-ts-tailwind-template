import "@/common/styles/globals.scss";

import { CoreLayout } from "@/common/components/CoreLayout";
import { PageHead } from "@/common/components/PageHead";

export const App = ({ Component, pageProps }) => {
  const Layout = Component.layout ? Component.layout : CoreLayout;
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
