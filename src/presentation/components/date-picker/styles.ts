import styled, { css } from "styled-components";

export const DatePickerWrapper = styled.div`
  width: 100%;

  ${({ theme }) => {
    const { colors, typographies, radius } = theme;
    const { sizes } = typographies;

    return css`
      & .MuiPickersInputBase-input {
        color: ${colors.text};
        font-size: ${sizes.md};
      }

      & .MuiInputLabel-root {
        color: ${colors.textSecondary};

        &.Mui-focused {
          color: ${colors.secondary};
        }
      }

      & .MuiPickersOutlinedInput-root {
        border-radius: ${radius.md};

        & fieldset {
          border-color: ${colors.surface};
          border-radius: ${radius.md};
        }

        &:hover:not(.Mui-focused) fieldset {
          border-color: ${colors.textSecondary};
        }

        &.Mui-focused fieldset {
          border-color: ${colors.secondary} !important;
          border-width: 2px !important;
        }
      }
    `;
  }}
`;