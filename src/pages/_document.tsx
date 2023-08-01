import Document, { Head, Html, Main, NextScript } from 'next/document';

import { Favicon } from '@/common/components/FavIcon';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
