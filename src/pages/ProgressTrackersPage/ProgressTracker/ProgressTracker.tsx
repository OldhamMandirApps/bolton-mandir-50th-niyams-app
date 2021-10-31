import React from 'react';
import { Box, Card, Grid, IconButton, LinearProgress, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Niyam } from '../../../config/niyams';
import { slugify } from '../../../utils/string';
import useNiyamProgressInfo from '../../../hooks/useNiyamProgressInfo';
import { useHistory } from 'react-router-dom';

interface ProgressTrackerProps {
  niyam: Niyam;
  niyamLink?: string;
  tabIndex?: number;
}

function ProgressTracker(props: ProgressTrackerProps): JSX.Element {
  const { niyam, niyamLink, tabIndex } = props;

  const { data } = useNiyamProgressInfo(niyam);
  const router = useHistory();

  function progressBarValue(progress: number, target: number) {
    const percentage = (progress / target) * 100;
    return percentage > 100 ? 100 : percentage;
  }

  return (
    <Grid item data-testid={`tracker-${slugify(niyam)}`}>
      <Card
        raised
        variant='gradient'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2.5,
          pt: 1.0,
        }}
      >
        <Grid container direction='row' justifyContent='space-between' alignItems='center' minHeight='40px'>
          <Typography variant='h6' component='div' sx={{ fontWeight: 500, color: 'white' }}>
            {niyam}
          </Typography>
          {niyamLink ? (
            <IconButton
              aria-label='go to niyam'
              disableFocusRipple
              disableRipple
              disableTouchRipple
              onClick={() => {
                router.push(niyamLink, { tabIndex });
              }}
            >
              <ChevronRightIcon sx={{ fontWeight: 800, color: 'white', fontSize: '2rem' }} />
            </IconButton>
          ) : null}
        </Grid>
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
