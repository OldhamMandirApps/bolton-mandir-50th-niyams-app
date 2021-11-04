import { createTheme } from '@mui/material/styles';

const primary = {
  50: '#F3F3F3',
  100: '#F4EEDD',
  200: '#F5E9C8',
  300: '#F6E3B2',
  400: '#F7DE9C',
  main: '#F9D987', // contrast 3.83:1
  500: '#FAD471',
  600: '#FBCF5B',
  700: '#FCC945',
  800: '#FDC430',
  900: '#FEBF1A',
};

const theme = createTheme({
  palette: { primary },
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
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#042139',
          backgroundColor: '#FEBF1A',
        },
      },
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
          backgroundColor: '#ffffffb8',
        },
        bar: {
          borderRadius: 10,
          backgroundColor: '#105d9d',
        },
      },
    },
  },
});

export default theme;
