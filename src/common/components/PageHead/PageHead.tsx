import Head from "next/head";
import { PropsWithChildren, useMemo } from "react";

export interface PageHeadProps {
  name?: string;
  description?: string;
  removeTitleAppend?: boolean;
}

const appName = "Your App Here";

export const PageHead = ({
  name,
  description,
  removeTitleAppend = false,
  children,
}: PropsWithChildren<PageHeadProps>) => {
  const pageName = useMemo(() => {
    if (!removeTitleAppend) {
      return name ? `${name} | ${appName}` : appName;
    }
    return name ?? appName;
  }, [name, removeTitleAppend]);

  const pageDesc = description ?? appName;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>{pageName}</title>
      <meta content={pageDesc} name="description" />
      <meta content={pageName} name="og:title" />
      <meta content={pageDesc} name="og:description" />
      {children}
    </Head>
  );
};
