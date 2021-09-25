import React from 'react';
import { Niyam } from '../../config/niyams';
import ProgressTracker from '../../components/ProgressTracker';

function ProgressTrackersPage(): JSX.Element {
  return (
    <div data-testid='progress-trackers-page'>
      <h1>Progress Trackers Page</h1>
      <ProgressTracker niyam={Niyam.OradaNaPads} />
    </div>
  );
}

export default ProgressTrackersPage;
