import { styled, Tab } from '@mui/material';

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
  'textTransform': 'none',
  'fontWeight': theme.typography.fontWeightRegular,
  'fontSize': theme.typography.pxToRem(15),
  'marginRight': theme.spacing(1),
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

export default StyledTab;
