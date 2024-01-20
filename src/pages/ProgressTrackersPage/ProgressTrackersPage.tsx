import { Button, Grid, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { niyams } from '../../config/niyams';
import ProgressTracker from './ProgressTracker';
import { PageContainer } from '../common/components';
import Snackbar from './Snackbar';
import SocialBanner from './SocialBanner';

const SubmitNiyamProgressButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
  },
}));

const TrackersGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '-32px',
  },
}));

function isAndroid() {
  const userAgent = navigator.userAgent;
  if (/android/i.test(userAgent)) {
    return true;
  }
  return false;
}

function ProgressTrackersPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <SocialBanner />
      <hr style={{ width: '65vw', border: '1px solid lightgrey' }} />
      <PageContainer data-testid='progress-trackers-page'>
        <TrackersGrid data-testid='trackers' container direction='column' mt={2} spacing={2}>
          {niyams.map((niyam) => (
            <ProgressTracker key={niyam.id} niyam={niyam} />
          ))}
        </TrackersGrid>
        <Grid container mt={4} mb={2} spacing={2}>
          <Grid container item xs={12} sm={12} justifyContent='center'>
            <SubmitNiyamProgressButton
              variant='contained'
              onClick={() => {
                navigate('/submit-niyam-progress');
              }}
            >
              Submit your Vandu pad recital progress
            </SubmitNiyamProgressButton>
          </Grid>
        </Grid>
        <Snackbar />
      </PageContainer>
    </>
  );
}

export default ProgressTrackersPage;
