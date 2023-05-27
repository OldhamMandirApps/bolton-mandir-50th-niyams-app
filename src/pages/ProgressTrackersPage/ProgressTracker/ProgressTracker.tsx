import { Box, Card, Grid, LinearProgress, Typography } from '@mui/material';
import { Niyam } from '../../../config/niyams';
import { slugify } from '../../../utils/string';
import useNiyamProgressInfo from '../../../hooks/useNiyamProgressInfo';

interface ProgressTrackerProps {
  niyam: Niyam;
}

function ProgressTracker({ niyam }: ProgressTrackerProps): JSX.Element {
  const { data } = useNiyamProgressInfo(niyam);

  function progressBarValue(progress: number, target: number) {
    const percentage = Math.floor((progress / target) * 100);
    return percentage > 100 ? 100 : percentage;
  }

  function getTimeLabel(progress: number) {
    const numberHours = Math.floor(progress);
    const numberMinutes = Math.floor((progress - numberHours) * 60);
    const hoursLabel = `${numberHours} ${numberHours > 1 ? 'hours' : 'hour'}`;
    const minutesLabel = `${numberMinutes} minutes`;

    return numberHours === 0 && numberMinutes === 0 ? '' : `${hoursLabel} ${minutesLabel}`;
  }

  const timeLabel = getTimeLabel(data?.progress ?? 0);

  return (
    <Grid item data-testid={`tracker-${slugify(niyam.id)}`}>
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
        <Typography
          variant='h6'
          sx={{
            fontWeight: 600,
            fontSize: '18px',
            color: '#042139',
            hyphens: 'auto',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            py: '8px',
          }}
        >
          {data?.label ?? niyam.label}
        </Typography>
        {niyam.timeBased && timeLabel !== '' && (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Typography color='gray' variant='body2'>
              {timeLabel}
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: niyam.timeBased && timeLabel !== '' ? 0 : -0.5,
            mt: niyam.timeBased && timeLabel !== '' ? 0 : 2,
          }}
        >
          <LinearProgress
            aria-label='Niyam Progress'
            variant='determinate'
            value={data ? progressBarValue(data.progress, data.target) : 0}
            sx={{ flexGrow: 1 }}
          />
          <Typography color='#042139' variant='body2' sx={{ ml: 2, fontWeight: '700' }}>
            {Math.floor(data?.progress ?? 0)} / {data?.target ?? 0}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}

export default ProgressTracker;
