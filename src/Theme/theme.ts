import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0097A7', // Cyan
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFCCBC', // Light Orange
      contrastText: '#000',
    },
    background: {
      default: '#E0E0E0', // Light Grey
    },
  },
});

export default theme;
