import styled, { css } from "styled-components"
import { 
  Button as MuiButton,
  Container as MuiContainer, 
  TextField,
  Stack, 
  Typography 
} from '@mui/material';

export const Container = styled(MuiContainer)`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled(MuiContainer)`
  display: flex;
  flex-direction: column;

  max-width: 500px;

  ${({ theme }) => {
    const { colors, sizes, radius } = theme;

    return css`
      background: ${colors.surface};
      gap: ${sizes.md};
      border-radius: ${radius.lg};
      padding: ${sizes.xl};
    `;
  }};
`;

export const TitleArea = styled(Stack).attrs({
  direction: "column",
  spacing: 1
})``;

export const Title = styled(Typography)`
  ${({ theme }) => {
    const { typographies, colors } = theme;
    const { sizes, weights } = typographies;
    
    return css`
      color: ${colors.text};
      font-size: ${sizes.lg};
      font-weight: ${weights.bold};
    `;
  }}
`;

export const SubTitle = styled(Typography)`
  ${({ theme }) => {
    const { typographies, colors } = theme;
    const { sizes, weights } = typographies;
    
    return css`
      color: ${colors.text};
      font-size: ${sizes.xl};
      font-weight: ${weights.bold};
    `;
  }}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${({ theme }) => {
    const { md, lg } = theme.sizes;
    
    return css`
      gap: ${md};
      margin-top: ${lg};
    `;
  }}
`;

export const Input = styled(TextField).attrs({
  fullWidth: true,
  variant: "outlined"
})`
  ${({ theme }) => {
    const { colors, typographies, radius } = theme;
    const { sizes } = typographies;

    return css`
      & .MuiInputBase-input {
        color: ${colors.text};
        font-size: ${sizes.md};
        border-color: ${colors.text};
      }
      
      & .MuiInputLabel-root {
        color: ${colors.textSecondary};
        border-color: ${colors.text};
        
        &.Mui-focused {
          color: ${colors.secondary};
        }
      }
    
      & .MuiOutlinedInput-root {
        & fieldset {
          border-color: ${colors.surface};
          border-radius: ${radius.md};
        }
    
        &:hover fieldset {
          border-color: ${colors.textSecondary};
        }
    
        &.Mui-focused fieldset {
          border-color: ${colors.secondary};
          border-width: 2px;
        }
      }
    
    `;
  }}

`;

export const Button = styled(MuiButton).attrs({
  variant: "contained",
  color: "inherit"
})`
  background: ${({ theme }) => theme.colors.secondary};
`;