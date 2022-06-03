import Head from "next/head";
import { PropsWithChildren } from "react";

interface Props {
  name?: string;
  description?: string;
  append?: boolean;
}

export const PageHead = ({
  name,
  description,
  append = true,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  const appName = "Your App";
  const pageName = () => {
    if (append) {
      return name ? `${name} | ${appName}` : appName;
    }
    return name ?? appName;
  };
  const pageDesc = description ?? appName;
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{pageName()}</title>
      <meta content={pageDesc} name="description" />
      <meta content={pageName()} name="og:title" />
      <meta content={pageDesc} name="og:description" />
      {children}
    </Head>
  );
};
