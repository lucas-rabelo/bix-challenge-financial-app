import { TextField } from "@mui/material";
import styled, { css } from "styled-components";

export const StyledInput = styled(TextField).attrs({
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