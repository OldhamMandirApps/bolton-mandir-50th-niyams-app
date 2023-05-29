import { Button, Grid, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { niyams } from '../../config/niyams';
import ProgressTracker from './ProgressTracker';
import { H1, PageContainer } from '../common/components';
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

function ProgressTrackersPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <SocialBanner />
      <hr style={{ width: '65vw', border: '1px solid lightgrey' }} />
      <PageContainer data-testid='progress-trackers-page'>
        <Grid container mb={4} spacing={2}>
          <Grid item xs={12} sm={6}>
            <H1>Niyam Progress</H1>
          </Grid>
          <Grid container item xs={12} sm={6} justifyContent='flex-end'>
            <SubmitNiyamProgressButton
              variant='contained'
              onClick={() => {
                navigate('/submit-niyam-progress');
              }}
            >
              Add your niyam progress
            </SubmitNiyamProgressButton>
          </Grid>
        </Grid>
        <TrackersGrid data-testid='trackers' container direction='column' spacing={2}>
          {niyams.map((niyam) => (
            <ProgressTracker key={niyam.id} niyam={niyam} />
          ))}
        </TrackersGrid>
        <Snackbar />
      </PageContainer>
    </>
  );
}

export default ProgressTrackersPage;
