import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Card, Grid, IconButton, LinearProgress, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Niyam } from '../../../config/niyams';
import { slugify } from '../../../utils/string';
import useNiyamProgressInfo from '../../../hooks/useNiyamProgressInfo';

interface ProgressTrackerProps {
  niyam: Niyam;
  niyamLink: string;
}

function ProgressTracker(props: ProgressTrackerProps): JSX.Element {
  const { niyam, niyamLink } = props;

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
          pt: 1.5,
        }}
      >
        <Grid container direction='row' justifyContent='space-between' alignItems='center' minHeight='40px'>
          <Grid item xs={10}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 500,
                fontSize: '18px',
                color: 'white',
                hyphens: 'auto',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
              }}
            >
              {niyam}
            </Typography>
          </Grid>
          <Grid container item xs={2} justifyContent='flex-end'>
            <IconButton
              aria-label='go to niyam'
              disableFocusRipple
              disableRipple
              disableTouchRipple
              onClick={() => {
                router.push(niyamLink);
              }}
              sx={{ padding: 0 }}
            >
              <ChevronRightIcon sx={{ fontWeight: 800, color: 'white', fontSize: '2rem' }} />
            </IconButton>
          </Grid>
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
