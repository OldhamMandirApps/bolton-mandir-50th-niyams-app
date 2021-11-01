import Navbar from '../../common/Navbar';
import { H1, PageContainer } from '../../common/components';
import React from 'react';
import { Box, Link, Typography } from '@mui/material';

function BhaktachintamaniVachanamrut(): JSX.Element {
  return (
    <div>
      <Navbar showLanguageToggle={false} />
      <PageContainer data-testid='bhaktachintamani-vachanamrut'>
        <H1>Bhaktachintamani/Vachanamrut</H1>
        <Box pt='16px'>
          <Typography fontWeight='medium' pt='8px' fontSize='18px'>
            As part of our niyams for our Nutan Mandir Mahotsav, we have set a target to read 450 paaths of the
            Bhaktachintamani and Vachanamrut.
          </Typography>
          <Typography fontWeight='medium' pb='8px' fontSize='18px'>
            Click on the links below to read the granth of your choice:
          </Typography>
          <Typography fontWeight='medium' pt='16px' pb='8px' fontSize='18px'>
            Vachanamrut:
          </Typography>
          <Typography fontWeight='medium'>
            Play store:
            <Link href='https://play.google.com/store/apps/details?id=com.bhujmandir.vachanamrut' ml='8px'>
              https://play.google.com/store/apps/details?id=com.bhujmandir.vachanamrut
            </Link>
            <br />
            App Store:
            <Link href='https://apps.apple.com/us/app/vachanamrut-learning-app/id1476077803?ls=1' ml='8px'>
              https://apps.apple.com/us/app/vachanamrut-learning-app/id1476077803?ls=1
            </Link>
          </Typography>
          <Typography fontWeight='medium' pt='18px' pb='8px' fontSize='18px'>
            Bhaktachintamani:
          </Typography>
          <Link href='https://www.swaminarayan.faith/media/3902/bhakta-chintamni.pdf' fontWeight='medium'>
            https://www.swaminarayan.faith/media/3902/bhakta-chintamni.pdf
          </Link>
        </Box>
      </PageContainer>
    </div>
  );
}

export default BhaktachintamaniVachanamrut;
