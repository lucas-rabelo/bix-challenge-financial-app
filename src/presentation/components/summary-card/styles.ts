import { Card, Stack, Typography } from '@mui/material';
import styled, { css } from "styled-components";

export const Container = styled(Card)`
  ${({ theme }) => {
    const { colors, sizes } = theme;
    
    return css`
      width: 100%;
      background: ${colors.surface};
      padding: ${sizes.lg};
    `;
  }};
`;

export const Header = styled(Stack).attrs({
  direction: 'row',
  spacing: 2
})`
  display: flex;
  align-items: center;
`;

export const Name = styled(Typography).attrs({
  variant: "inherit",
})`
  ${({ theme }) => {
    const { fontFamily, sizes, weights } = theme.typographies
    
    return css`
      font-family: ${fontFamily};
      font-size: ${sizes.md};
      font-weight: ${weights.bold};
    `;
  }}
`;

export const Currency = styled(Typography)`
  ${({ theme }) => {
    const { sizes } = theme;
    const { fontFamily, sizes: typographySizes, weights } = theme.typographies
    
    return css`
      margin-top: ${sizes.md};
      font-family: ${fontFamily};
      font-size: ${typographySizes.lg};
      font-weight: ${weights.bold};
    `;
  }}
`;
