import styled from "styled-components";
import { IconButton } from '@mui/material';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #0f1115;
`;

export const Content = styled.main`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ButtonMenu = styled(IconButton)`
  width: fit-content;
`;