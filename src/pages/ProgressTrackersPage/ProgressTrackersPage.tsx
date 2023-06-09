import { Box, Button, Grid, Typography, styled } from '@mui/material';
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

function isAndroid() {
  const userAgent = navigator.userAgent;
  if (/android/i.test(userAgent)) {
    return true;
  }
  return false;
}

function ProgressTrackersPage(): JSX.Element {
  const navigate = useNavigate();
  const deviceIsAndroid = isAndroid();

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
              Submit your niyam progress
            </SubmitNiyamProgressButton>
          </Grid>
        </Grid>
        <TrackersGrid data-testid='trackers' container direction='column' spacing={2}>
          {niyams.map((niyam) => (
            <ProgressTracker key={niyam.id} niyam={niyam} />
          ))}
        </TrackersGrid>
        <Box mt={3} textAlign='center'>
          <Typography sx={{ fontSize: '18px' }}>
            Join us every Sunday evening for our collective Niyam of reciting Harismruti.
          </Typography>
          <Button
            sx={{ mt: '4px' }}
            href={
              deviceIsAndroid
                ? 'https://open.swaminarayan.faith/link/2ZQU'
                : 'https://www.swaminarayan.faith/scriptures/gu/nishkulanand_kavya/harismruti/1'
            }
            target='_blank'
            rel='noopener noreferrer'
          >
            Open Harismruti
          </Button>
        </Box>
        <Snackbar />
      </PageContainer>
    </>
  );
}

export default ProgressTrackersPage;
