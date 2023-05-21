import React from 'react';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import { Niyam } from '../../config/niyams';
import ProgressTracker from './ProgressTracker';
import { H1, PageContainer } from '../common/components';
import Snackbar from './Snackbar';
import { useNavigate } from 'react-router-dom';
import { niyamLinks } from './config';
import Navbar from '../common/Navbar';

const AddNiyamProgressButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
  },
}));

const TrackersGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '-32px',
  },
}));

function ProgressTrackersPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar showLanguageToggle={false} />
      <PageContainer data-testid='progress-trackers-page'>
        <Grid container mb={4} spacing={2}>
          <Grid item xs={12} sm={6}>
            <H1>Niyam Progress</H1>
          </Grid>
          <Grid container item xs={12} sm={6} justifyContent='flex-end'>
            <AddNiyamProgressButton
              variant='contained'
              onClick={() => {
                navigate('/add-your-niyam-count');
              }}
            >
              Add your niyam count
            </AddNiyamProgressButton>
          </Grid>
        </Grid>
        <Box pb='16px'>
          <Typography fontWeight='medium' fontSize='18px' pb='8px'>
            Jay Shree Swaminarayan!
          </Typography>
          <Typography fontSize='18px'>
            Below are the niyams for Shree Swaminarayan Mandir Oldham's Nutan Mandir Mahotsav
          </Typography>
        </Box>

        <Typography paragraph fontSize='14px'>
          Click on the below arrows to read the niyams
        </Typography>
        <TrackersGrid data-testid='trackers' container direction='column' spacing={2}>
          <ProgressTracker niyam={Niyam.ShantiPaath} niyamLink={niyamLinks.shantiPaath} />
          <ProgressTracker niyam={Niyam.JanmangalNamavaliStotram} niyamLink={niyamLinks.janmangal} />
          <ProgressTracker niyam={Niyam.OradaNaPads} niyamLink={niyamLinks.oradaNaPads} />
          <ProgressTracker
            niyam={Niyam.BhaktachintamaniVachanamrut}
            niyamLink={niyamLinks.bhaktachintamaniVachanamrut}
          />
        </TrackersGrid>
        <Snackbar />
      </PageContainer>
    </div>
  );
}

export default ProgressTrackersPage;
