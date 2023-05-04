import { PathsProps } from 'Types/Paths';
import { AbsoluteProps } from 'src/types/Absolute';
import { RelativeProps } from './types/Relative';
interface InSameFileOptions {
  foo: string;
}

export interface LibraryProps
  extends InSameFileOptions,
    RelativeProps,
    PathsProps,
    AbsoluteProps {}

export const Library: LibraryProps = {
  foo: '',
  relative: 1,
  absolute: false,
  paths: [],
};
