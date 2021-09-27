import React from 'react';
import { Niyam } from '../../config/niyams';
import ProgressTracker from '../../components/ProgressTracker';
import { Grid } from '@mui/material';
import { H1, PageContainer } from '../common/components';

function ProgressTrackersPage(): JSX.Element {
  return (
    <PageContainer data-testid='progress-trackers-page'>
      <H1>Niyam Progress</H1>
      <Grid data-testid='trackers' container direction='column' spacing={2}>
        <ProgressTracker niyam={Niyam.ShantiPaath} />
        <ProgressTracker niyam={Niyam.JanmangalNamavali} />
        <ProgressTracker niyam={Niyam.JanmangalStotram} />
        <ProgressTracker niyam={Niyam.OradaNaPads} />
        <ProgressTracker niyam={Niyam.UtsavKirtan} />
      </Grid>
    </PageContainer>
  );
}

export default ProgressTrackersPage;
