import React from 'react';
import { Button, Grid, styled } from '@mui/material';
import { Niyam } from '../../config/niyams';
import ProgressTracker from './ProgressTracker';
import { H1, PageContainer } from '../common/components';
import Snackbar from './Snackbar';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  return (
    <PageContainer data-testid='progress-trackers-page'>
      <Grid container mb={4} spacing={2}>
        <Grid item xs={12} sm={6}>
          <H1>Niyam Progress</H1>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='flex-end'>
          <AddNiyamProgressButton
            variant='contained'
            onClick={() => {
              history.push('/add-your-niyam-progress');
            }}
          >
            Add your niyam progress
          </AddNiyamProgressButton>
        </Grid>
      </Grid>

      <TrackersGrid data-testid='trackers' container direction='column' spacing={2}>
        <ProgressTracker niyam={Niyam.ShantiPaath} />
        <ProgressTracker niyam={Niyam.JanmangalNamavali} />
        <ProgressTracker niyam={Niyam.JanmangalStotram} />
        <ProgressTracker niyam={Niyam.OradaNaPads} />
      </TrackersGrid>
      <Snackbar />
    </PageContainer>
  );
}

export default ProgressTrackersPage;
