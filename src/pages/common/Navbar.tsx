import { AppBar, Box, Toolbar, styled, useScrollTrigger } from '@mui/material';
import logo from '../../images/nav-logo.svg';
import React from 'react';

interface ElevationScrollProps {
  children: React.ReactElement;
}

function ElevationScroll(props: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

const NavItemsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

function Navbar(): JSX.Element {
  return (
    <>
      <ElevationScroll>
        <AppBar sx={{ backgroundColor: 'white' }}>
          <Toolbar>
            <NavItemsContainer sx={{ width: '100%' }}>
              <a href='/'>
                <img src={logo} alt='utsav logo' style={{ maxHeight: '105px' }} />
              </a>
            </NavItemsContainer>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default Navbar;
