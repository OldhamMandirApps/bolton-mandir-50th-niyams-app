import { Box, Grid, Toolbar, Typography, styled } from '@mui/material';
import logo from '../../images/nav-logo.svg';

const NavItemsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

function Navbar(): JSX.Element {
  return (
    <>
      <Toolbar sx={{ backgroundColor: '#BC3606', py: '8px' }}>
        <Grid container alignItems='center' flexDirection='column'>
          <Typography sx={{ color: '#EDBC63', fontSize: '14px', fontWeight: 600, textAlign: 'center' }}>
            Shree Kutch Satsang Swaminarayan Temple Bolton
          </Typography>
          <Typography sx={{ color: '#EDBC63', fontSize: '14px', fontWeight: 400 }}>
            Under Shree Nar Narayan Dev Bhuj
          </Typography>
        </Grid>
      </Toolbar>
      <Toolbar sx={{ backgroundColor: '#efecec', borderBottom: '4px solid #BC3606' }}>
        <NavItemsContainer sx={{ width: '100%', textAlign: 'center' }}>
          <a href='/'>
            <img src={logo} alt='utsav logo' style={{ maxHeight: '125px' }} />
          </a>
        </NavItemsContainer>
      </Toolbar>
    </>
  );
}

export default Navbar;
