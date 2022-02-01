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
        <Box pt='16px' width='100%' sx={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
          <Typography fontWeight='medium' fontSize='18px' pt='8px'>
            As part of our niyams for our Nutan Mandir Mahotsav, we have set a target to read 45 paaths of the
            Bhaktachintamani and Vachanamrut.
          </Typography>
          <Typography pb='8px' mt='4px' sx={{ color: 'gray', fontWeight: '600', fontSize: '18px' }}>
            Click on the links below to read the granth of your choice:
          </Typography>
          <Typography pt='16px' pb='8px' sx={{ textDecoration: 'underline', fontWeight: 'medium', fontSize: '18px' }}>
            Vachanamrut
          </Typography>
          <Typography fontWeight='medium'>Play store:</Typography>
          <Link href='https://play.google.com/store/apps/details?id=com.bhujmandir.vachanamrut' fontWeight='medium'>
            https://play.google.com/store/apps/details?id=com.bhujmandir.vachanamrut
          </Link>
          <Typography fontWeight='medium' mt='8px'>
            App Store:
          </Typography>
          <Link href='https://apps.apple.com/us/app/vachanamrut-learning-app/id1476077803?ls=1' fontWeight='medium'>
            https://apps.apple.com/us/app/vachanamrut-learning-app/id1476077803?ls=1
          </Link>
          <Typography pt='18px' pb='8px' sx={{ textDecoration: 'underline', fontWeight: 'medium', fontSize: '18px' }}>
            Bhaktachintamani
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
