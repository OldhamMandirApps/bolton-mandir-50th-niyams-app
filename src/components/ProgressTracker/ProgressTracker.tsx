import React from 'react';
import { Niyam } from '../../config/niyams';
import { slugify } from '../../utils/string';

interface ProgressTrackerProps {
  niyam: Niyam;
}

function ProgressTracker(props: ProgressTrackerProps): JSX.Element {
  //TODO: hook to get data from firestore - pass in name of niyam -> useNiyamProgressInfo(niyam: string)
  // TODO: components to use Card, Box, LinearProgress, Typography
  // inspiration: https://github.com/mui-org/material-ui/blob/686ec23b59a60105ad7b6ce51c29d4bc0aa9696e/docs/src/components/showcase/TaskCard.tsx#L79
  return (
    <div data-testid={`tracker-${slugify(props.niyam)}`}>
      <h1>Progress Tracker</h1>
    </div>
  );
}

export default ProgressTracker;
