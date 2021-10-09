import React from 'react';
import { Box, Card, Grid, LinearProgress, Typography } from '@mui/material';
import { Niyam } from '../../../config/niyams';
import { slugify } from '../../../utils/string';
import useNiyamProgressInfo from '../../../hooks/useNiyamProgressInfo';

interface ProgressTrackerProps {
  niyam: Niyam;
}

function ProgressTracker(props: ProgressTrackerProps): JSX.Element {
  const { data } = useNiyamProgressInfo(props.niyam);

  function progressBarValue(progress: number, target: number) {
    const percentage = (progress / target) * 100;
    return percentage > 100 ? 100 : percentage;
  }

  return (
    <Grid item data-testid={`tracker-${slugify(props.niyam)}`}>
      <Card
        raised
        variant='gradient'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2.5,
          pt: 2,
        }}
      >
        <Box>
          <Typography variant='h6' component='div' sx={{ fontWeight: 500, color: 'white' }}>
            {props.niyam}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: -0.5, mt: 2 }}>
          <LinearProgress
            aria-label='Niyam Progress'
            variant='determinate'
            value={data ? progressBarValue(data.progress, data.target) : 0}
            sx={{ flexGrow: 1 }}
          />
          <Typography color='#00C8FF' variant='body2' sx={{ ml: 2 }}>
            <b>
              {data?.progress} / {data?.target}
            </b>
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}

export default ProgressTracker;
