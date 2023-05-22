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
    const percentage = Math.floor(progress / target) * 100;
    return percentage > 100 ? 100 : percentage;
  }

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
        <Grid container direction='row' justifyContent='space-between' alignItems='center' minHeight='40px'>
          <Grid item xs={10}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 500,
                fontSize: '18px',
                color: '#042139',
                hyphens: 'auto',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
              }}
            >
              {data?.label ?? niyam.label}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: -0.5, mt: 2 }}>
          <LinearProgress
            aria-label='Niyam Progress'
            variant='determinate'
            value={data ? progressBarValue(data.progress, data.target) : 0}
            sx={{ flexGrow: 1 }}
          />
          <Typography color='#042139' variant='body2' sx={{ ml: 2 }}>
            <b>
              {Math.floor(data?.progress ?? 0)} / {data?.target ?? 0}
            </b>
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}

export default ProgressTracker;
