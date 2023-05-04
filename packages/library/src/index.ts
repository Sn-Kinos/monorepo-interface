import { SizeProps } from 'Types/Common';
interface LibraryOptions {
  foo: string;
}

export interface LibraryProps extends LibraryOptions, SizeProps<number> {}

const Library: LibraryProps = {
  foo: '',
  size: 1,
};
