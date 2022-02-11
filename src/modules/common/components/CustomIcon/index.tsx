import { PropsWithChildren } from "react";

import CrossSvg from "./svg/Cross";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number | string; // width and height will both be set as the same value
  name?: string;
}

const CustomIcon = (props: PropsWithChildren<Props>): JSX.Element => {
  const {
    children,
    width = 24,
    height = 24,
    size,
    viewBox = "0 0 24 24",
    name,
    ...rest
  } = props;

  return (
    <svg
      aria-labelledby={name}
      height={size || height}
      role="presentation"
      viewBox={viewBox}
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  );
};

export const CrossIcon = ({ ...props }: Props) => (
  <CustomIcon height={24} viewBox="0 0 24 24" width={24} {...props}>
    <CrossSvg />
  </CustomIcon>
);

export default CustomIcon;
