import { createTheme } from '@mui/material/styles';
import { theme } from './theme';

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: theme.colors.primary,
    },
    background: {
      default: theme.colors.background,
    },
    text: {
      primary: theme.colors.text,
    },
  },
});