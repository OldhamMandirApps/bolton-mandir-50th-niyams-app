import { styled, Tab } from '@mui/material';

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  'textTransform': 'none',
  'fontWeight': theme.typography.fontWeightRegular,
  'fontSize': '1.1rem',
  'color': '#042139',
  'marginRight': theme.spacing(3),
  'paddingLeft': 0,
  'paddingRight': 0,
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
  '&.Mui-selected': {
    fontWeight: theme.typography.fontWeightBold,
  },
  '&.MuiTab-root': {
    color: '#10a194',
  },
}));

export default StyledTab;
