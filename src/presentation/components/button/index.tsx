'use client'

import { StyledButton } from "./styles"
import type { ButtonProps } from "./types"

export function Button({ label, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{label}</StyledButton>
}