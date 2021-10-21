import React from 'react';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Translate } from '@mui/icons-material';
import { useRecoilState } from 'recoil';
import { currentLanguageAtom, Language } from './atoms';

function Navbar(): JSX.Element {
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
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h5' sx={{ color: 'black', fontWeight: 500 }}>
            Nutan Utsav App
          </Typography>
          <IconButton aria-label='change language' onClick={toggleLanguage}>
            <Translate sx={{ fontWeight: 500 }} />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
