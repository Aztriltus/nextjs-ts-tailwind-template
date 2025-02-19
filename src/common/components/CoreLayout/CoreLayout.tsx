import { PropsWithChildren } from 'react';

interface CoreLayoutProps {}

export const CoreLayout = ({
  children,
}: PropsWithChildren<CoreLayoutProps>) => {
  return <div className="relative h-full min-h-full">{children}</div>;
};
