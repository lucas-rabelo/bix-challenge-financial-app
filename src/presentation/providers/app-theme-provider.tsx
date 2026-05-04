'use client';

import { ThemeProvider as MuiProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { GlobalStyles } from '@/presentation/styles/global';
import { muiTheme } from '@/presentation/styles/mui-theme';
import { theme } from '@/presentation/styles/theme';

export function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiProvider theme={muiTheme}>
        <StyledProvider theme={theme}>
          <GlobalStyles />
          {children}
        </StyledProvider>
      </MuiProvider>
    </StyledEngineProvider>
  );
}