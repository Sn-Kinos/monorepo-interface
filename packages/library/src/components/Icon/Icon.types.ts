import { SizeProps } from 'Types/Common';

interface IconOptions {
  name: string;
}

export interface IconProps extends IconOptions, SizeProps<number> {}
