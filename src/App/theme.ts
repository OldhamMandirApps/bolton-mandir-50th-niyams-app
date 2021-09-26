import { createTheme } from '@mui/material/styles';

const primary = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  main: '#007FFF', // contrast 3.83:1
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const theme = createTheme({
  palette: { mode: 'dark', primary },
  shape: {
    borderRadius: 10,
  },
  spacing: 10,
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(','),
    h6: {
      lineHeight: 1.2,
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: `linear-gradient(to right bottom, ${primary.main}, ${primary[700]} 120%)`,
            boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
          },
        },
      ],
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '1px solid #fff',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 10,
          borderRadius: 10,
          backgroundColor: 'rgba(255,255,255,0.12)',
        },
        bar: {
          borderRadius: 10,
          backgroundColor: '#fff',
        },
      },
    },
  },
});

export default theme;
