import { Box, Link, Typography } from '@mui/material';
import { H1, PageContainer } from '../common/components';
import SubmitNiyamProgressForm from './SubmitNiyamProgressForm';

function SubmitNiyamProgressPage(): JSX.Element {
  return (
    <PageContainer data-testid='submit-niyam-progress-page'>
      <Box sx={{ pb: 2 }}>
        <Link href='/' color='inherit' underline='none'>
          <Typography sx={{ fontWeight: 700 }}>
            <>&larr;</> Go back
          </Typography>
        </Link>
      </Box>
      <H1>Add your niyam progress</H1>
      <SubmitNiyamProgressForm />
    </PageContainer>
  );
}

export default SubmitNiyamProgressPage;
