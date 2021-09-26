import React from 'react';
import { Niyam } from '../../config/niyams';
import { slugify } from '../../utils/string';
import { Box, Card, LinearProgress, Typography } from '@mui/material';
import useNiyamProgressInfo from '../../hooks/useNiyamProgressInfo';

interface ProgressTrackerProps {
  niyam: Niyam;
}

function ProgressTracker(props: ProgressTrackerProps): JSX.Element {
  const { data } = useNiyamProgressInfo(props.niyam);
  // TODO: components to use Card, Box, LinearProgress, Typography
  // inspiration: https://github.com/mui-org/material-ui/blob/686ec23b59a60105ad7b6ce51c29d4bc0aa9696e/docs/src/components/showcase/TaskCard.tsx#L79

  return (
    <div data-testid={`tracker-${slugify(props.niyam)}`}>
      <Card
        raised
        variant='gradient'
        sx={{
          minWidth: 280,
          maxWidth: 360,
          display: 'flex',
          flexDirection: 'column',
          p: 2.5,
        }}
      >
        <Box>
          <Typography variant='h6' component='div' sx={{ fontWeight: 500 }}>
            {props.niyam}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: -0.5, mt: 0.5 }}>
          <LinearProgress
            aria-label='Progress'
            variant='determinate'
            value={data ? (data.progress / data.target) * 100 : 0}
            sx={{ flexGrow: 1 }}
          />
          <Typography color='#00C8FF' variant='body2' sx={{ ml: 2 }}>
            <b>
              {data?.progress} / {data?.target}
            </b>
          </Typography>
        </Box>
      </Card>
    </div>
  );
}

export default ProgressTracker;
