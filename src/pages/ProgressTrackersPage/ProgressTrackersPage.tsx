import React from 'react';
import { Niyam } from '../../config/niyams';
import ProgressTracker from '../../components/ProgressTracker';
import { Container, Grid, Typography } from '@mui/material';

function ProgressTrackersPage(): JSX.Element {
  return (
    <Container data-testid='progress-trackers-page' maxWidth={false} sx={{ mt: 2, p: 2, mx: 0 }}>
      <Typography variant='h4' component='h1' sx={{ fontWeight: 700, mb: 4 }}>
        Niyam Progress
      </Typography>
      <Grid data-testid='trackers' container direction='column' spacing={2}>
        <ProgressTracker niyam={Niyam.ShantiPaath} />
        <ProgressTracker niyam={Niyam.JanmangalNamavali} />
        <ProgressTracker niyam={Niyam.JanmangalStotram} />
        <ProgressTracker niyam={Niyam.OradaNaPads} />
        <ProgressTracker niyam={Niyam.UtsavKirtan} />
      </Grid>
    </Container>
  );
}

export default ProgressTrackersPage;
