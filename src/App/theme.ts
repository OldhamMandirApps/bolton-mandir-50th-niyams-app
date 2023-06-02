import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 10,
  },
  spacing: 10,
  typography: {
    fontFamily: ['Catamaran', 'sans-serif', '-apple-system', 'BlinkMacSystemFont'].join(','),
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
            backgroundColor: '#EDBC63',
            boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          'color': '#FFE7A2',
          'fontWeight': '700',
          'backgroundColor': '#CE3A00',
          'minWidth': '150px',
          ':hover': {
            backgroundColor: '#8D0200',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#007fff',
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
          backgroundColor: '#8d0200',
        },
      },
    },
  },
});

export default theme;
