import { Box, Grid, Toolbar, Typography, styled } from '@mui/material';
import logo from '../images/nav-logo.svg';

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
          <Typography
            sx={{ color: '#FFE7A2', fontSize: '16px', fontWeight: 600, textAlign: 'center', lineHeight: 1.2 }}
          >
            S.K.S. Swaminarayan Temple Bolton
          </Typography>
          <Typography sx={{ color: '#FFE7A2', fontSize: '12px', fontWeight: 400, lineHeight: 1.2 }}>
            Under Shree NarNarayan Dev Temple Bhuj
          </Typography>
        </Grid>
      </Toolbar>
      <Toolbar sx={{ backgroundColor: '#EFECEC', borderBottom: '4px solid #BC3606' }}>
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
