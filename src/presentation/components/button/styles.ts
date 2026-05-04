import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button).attrs({
  variant: "contained",
  color: "inherit"
})`
  background: ${({ theme }) => theme.colors.secondary};
`;