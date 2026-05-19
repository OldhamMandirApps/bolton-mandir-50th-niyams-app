import { Box, Typography } from '@mui/material';
import { firestoreTarget, shouldShowLiveFirestoreWarning } from '../config/firestoreTarget';

function FirestoreTargetBanner(): JSX.Element | null {
  if (shouldShowLiveFirestoreWarning === false) {
    return null;
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #7B2E0D 0%, #AE3408 100%)',
        borderBottom: '1px solid rgba(255, 231, 162, 0.35)',
        color: '#FFF5D6',
        px: { xs: 2, sm: 3 },
        py: 1,
        textAlign: 'center',
      }}
    >
      <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, fontWeight: 800, letterSpacing: '0.02em' }}>
        Local development is connected to {firestoreTarget} Firestore. Test submissions will update live{' '}
        {firestoreTarget} data.
      </Typography>
    </Box>
  );
}

export default FirestoreTargetBanner;
