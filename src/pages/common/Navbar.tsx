import React from 'react';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Translate } from '@mui/icons-material';
import { useRecoilState } from 'recoil';
import { currentLanguageAtom, Language } from './atoms';
import logo from '../../images/mandir-logo.png';

interface NavbarProps {
  showLanguageToggle: boolean;
}

function Navbar(props: NavbarProps): JSX.Element {
  const { showLanguageToggle } = props;

  const [currentLanguage, setCurrentLanguage] = useRecoilState(currentLanguageAtom);

  function toggleLanguage() {
    if (currentLanguage === Language.english) {
      setCurrentLanguage(Language.gujarati);
    } else {
      setCurrentLanguage(Language.english);
    }
  }

  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Grid container direction='column'>
          <Grid container item direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item xs={10}>
              <a href='/'>
                <img src={logo} alt='mandir logo' style={{ maxWidth: '300px', padding: '16px 0' }} />
              </a>
            </Grid>
            <Grid container item xs={2} justifyContent='flex-end'>
              {showLanguageToggle ? (
                <IconButton aria-label='change language' onClick={toggleLanguage}>
                  <Translate sx={{ fontWeight: 500 }} />
                </IconButton>
              ) : null}
            </Grid>
          </Grid>
          <Grid container direction='column'>
            <Typography fontStyle='italic' fontWeight='medium' color='black' pb='4px'>
              Welcoming Maharaj To A New Home
            </Typography>
            <Typography fontStyle='italic' fontWeight='medium' color='black' pb='8px'>
              Shyam Snehi Gher Avya...Ghanshyam Avya
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
