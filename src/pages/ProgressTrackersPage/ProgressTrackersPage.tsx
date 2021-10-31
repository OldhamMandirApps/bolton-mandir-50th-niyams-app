import React from 'react';
import { Button, Grid, styled, Typography } from '@mui/material';
import { Niyam } from '../../config/niyams';
import ProgressTracker from './ProgressTracker';
import { H1, PageContainer } from '../common/components';
import Snackbar from './Snackbar';
import { useHistory } from 'react-router-dom';
import { niyamLinks } from './config';

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
              history.push('/add-your-niyam-count');
            }}
          >
            Add your niyam count
          </AddNiyamProgressButton>
        </Grid>
      </Grid>

      <Typography paragraph textAlign='end' fontSize='14px'>
        Click on the below arrows to read the niyams
      </Typography>
      <TrackersGrid data-testid='trackers' container direction='column' spacing={2}>
        <ProgressTracker niyam={Niyam.ShantiPaath} niyamLink={niyamLinks.shantiPaath} />
        <ProgressTracker niyam={Niyam.JanmangalNamavali} niyamLink={niyamLinks.janmangal} tabIndex={0} />
        <ProgressTracker niyam={Niyam.JanmangalStotram} niyamLink={niyamLinks.janmangal} tabIndex={1} />
        <ProgressTracker niyam={Niyam.OradaNaPads} niyamLink={niyamLinks.oradaNaPads} />
      </TrackersGrid>
      <Snackbar />
    </PageContainer>
  );
}

export default ProgressTrackersPage;
