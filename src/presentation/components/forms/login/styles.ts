import styled, { css } from "styled-components";

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
