'use client';

import { StyledInput } from './styles';
import type { InputProps } from './types';

export function Input({ ...rest }: InputProps) {
  return <StyledInput {...rest} />
} 