import { CustomIcon, CustomIconProps } from './custom-icon';

export const CrossIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon {...props}>
      <path
        d="M18 6.48526L6 18.4853"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6 6.48526L18 18.4853"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </CustomIcon>
  );
};
