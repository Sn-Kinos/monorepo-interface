import { PathsInterface, PathsType } from 'Types/Paths';
import { AbsoluteInterface, AbsoluteType } from 'src/types/Absolute';
import { RelativeInterface, RelativeType } from './types/Relative';
interface InSameFileInterface {
  foo: string;
}

type InSameFileType = {
  foo: string;
};

export interface LibraryInterface
  extends InSameFileInterface,
    RelativeInterface,
    PathsInterface,
    AbsoluteInterface {}

export type LibraryType = InSameFileType &
  RelativeType &
  PathsType &
  AbsoluteType;

export const LibraryWithInterface: LibraryInterface = {
  foo: '',
  relative: 1,
  absolute: false,
  paths: [],
};

export const LibraryWithType: LibraryType = {
  foo: '',
  relative: 1,
  absolute: false,
  paths: [],
};
