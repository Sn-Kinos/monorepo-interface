import React from 'react';
import { IconProps } from './Icon.types';

export const Icon = ({ size, ...props }: IconProps) => (
  <svg width={size} {...props}></svg>
);
