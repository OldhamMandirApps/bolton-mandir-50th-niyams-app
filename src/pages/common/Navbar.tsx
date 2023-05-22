import { useRef } from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import logo from '../../images/mandir-logo.png';
import { useOnScreen } from './useOnScreen';

function Navbar(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <>
      <AppBar sx={{ backgroundColor: 'white' }} elevation={isVisible ? 0 : 5}>
        <Toolbar>
          <Grid container item direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={10}>
              <a href='/'>
                <img src={logo} alt='mandir logo' style={{ maxWidth: '300px', padding: '16px 0' }} />
              </a>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar
        ref={ref}
        sx={{
          backgroundColor: '#042139',
          paddingTop: '16px',
          paddingBottom: '8px',
          boxShadow:
            'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
        }}
      >
        <Grid container direction='column'>
          <Grid container item direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={10}>
              <a href='/'>
                <img src={logo} alt='mandir logo' style={{ maxWidth: '300px', padding: '16px 0' }} />
              </a>
            </Grid>
          </Grid>
          <Grid container direction='column'>
            <Typography fontStyle='italic' fontWeight='medium' color='#febf1a' pb='4px'>
              'Welcoming Maharaj To A New Home'
            </Typography>
            <Typography fontStyle='italic' fontWeight='medium' color='#febf1a' pb='8px'>
              'Shyam Snehi Gher Avya...Ghanshyam Avya'
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}

export default Navbar;
