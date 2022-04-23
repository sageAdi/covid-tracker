import { createTheme } from '@mui/material';

const defaultTheme = createTheme();

const overridetheme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#fc4a1a'
    }
  },
  typography: {
    h1: {
      fontSize: '6rem',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '4rem'
      }
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1rem'
      }
    }
  }
});

export default overridetheme;
