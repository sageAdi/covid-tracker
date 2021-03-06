import { createTheme } from '@mui/material';

const defaultTheme = createTheme();

const overridetheme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: 'rgba(34, 34, 34,1)',
      light: 'rgba(255, 255, 255,0.2)'
    },
    red: {
      dark: 'rgba(255, 7, 58, 1)',
      main: 'rgba(255, 7, 58, 0.6)',
      light: 'rgba(255, 7, 58, 0.1)'
    },
    green: {
      dark: 'rgba(40, 167, 69, 1)',
      main: 'rgba(40, 167, 69, 0.6)',
      light: 'rgba(40, 167, 69, 0.1)'
    },
    blue: {
      dark: 'rgba(0, 123, 255, 1)',
      main: 'rgba(0, 123, 255, 0.6)',
      light: 'rgba(0, 123, 255, 0.1)'
    },
    neutral: {
      dark: 'rgba(108,117,125,1)',
      main: 'rgba(108,117,125,.6)',
      light: 'rgba(108,117,125,.1)'
    },
    text: {
      dark: 'rgb(17, 17, 17)',
      light: 'rgb(102, 102, 102)'
    }
  },
  typography: {
    h1: {
      fontSize: '6rem',
      fontWeight: 800,
      lineHeight: 2,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '4rem'
      }
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 700
    }
  }
});

export default overridetheme;
