import { Alert, Box, LinearProgress, Skeleton, Typography } from '@mui/material';
import { H1, PageContainer } from '../common/components';
import SubmitNiyamProgressForm from './SubmitNiyamProgressForm';
import useNiyamProgressInfo from '../../hooks/useNiyamProgressInfo';
import { defaultSankalpTarget, niyams } from '../../config/niyams';

function getProgressPercentage(progress: number, target: number) {
  if (target <= 0) {
    return 0;
  }

  return Math.min(100, Math.floor((progress / target) * 100));
}

function SubmitNiyamProgressPage(): JSX.Element {
  const { data, error, loading } = useNiyamProgressInfo(niyams[0]);
  const hasLoadedTotal = loading === false && error === null && data !== null;
  const currentTotal = hasLoadedTotal ? Math.floor(data.progress) : null;
  const target = hasLoadedTotal && data.target > 0 ? data.target : defaultSankalpTarget;
  const percentage = currentTotal === null ? 0 : getProgressPercentage(currentTotal, target);
  const remaining = currentTotal === null ? null : Math.max(target - currentTotal, 0);

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 220px)',
        background:
          'radial-gradient(circle at top left, rgba(237, 188, 99, 0.34), transparent 30rem), linear-gradient(180deg, #FFF8EA 0%, #FFFDF8 48%, #FFFFFF 100%)',
        py: { xs: 2.5, sm: 4 },
      }}
    >
      <PageContainer data-testid='submit-niyam-progress-page'>
        <Box sx={{ maxWidth: '760px', mx: 'auto', px: { xs: 0.2, sm: 2 } }}>
          <Box
            sx={{
              border: '1px solid rgba(174, 52, 8, 0.13)',
              borderRadius: { xs: '24px', sm: '32px' },
              background: 'linear-gradient(135deg, rgba(174, 52, 8, 0.96), rgba(207, 111, 27, 0.94))',
              color: '#FFF8EA',
              p: { xs: 2.4, sm: 3.4 },
              boxShadow: '0 24px 60px rgba(111, 47, 8, 0.22)',
            }}
          >
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.14em', opacity: 0.86 }}>
              PURUSHOTTAM MAS SANKALP
            </Typography>
            <H1
              sx={{
                color: '#FFF8EA',
                fontSize: { xs: '2rem', sm: '2.55rem' },
                lineHeight: 1,
                mt: 1,
                mb: 1.4,
              }}
            >
              Submit your Naam Jap total
            </H1>
            <Typography sx={{ maxWidth: '580px', color: '#FFE7B7', fontSize: '1rem', lineHeight: 1.55 }}>
              Every completed jap helps the mandir family move towards the collective 2,000,000 Naam Jap offering.
            </Typography>
            {loading ? (
              <Typography sx={{ color: '#FFE7B7', fontSize: '0.95rem', fontWeight: 800, mt: 2 }}>
                Loading current sankalp total...
              </Typography>
            ) : null}
            <Box
              sx={{
                border: '1px solid rgba(255, 248, 234, 0.28)',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 248, 234, 0.12)',
                mt: 2.6,
                p: { xs: 1.8, sm: 2.2 },
              }}
            >
              {error !== null ? (
                <Alert severity='error' sx={{ mb: 1.6 }}>
                  We couldn't load the current total. Please refresh and try again.
                </Alert>
              ) : null}
              <Box
                sx={{
                  display: 'grid',
                  gap: 1.6,
                  gridTemplateColumns: { xs: '1fr', sm: '1.2fr 0.8fr 0.8fr' },
                  mb: 1.6,
                }}
              >
                <Box>
                  <Typography sx={{ color: '#FFE7B7', fontSize: '0.78rem', fontWeight: 800 }}>Current total</Typography>
                  <Typography sx={{ color: '#FFFDF8', fontSize: '1.75rem', fontWeight: 900, lineHeight: 1 }}>
                    {loading ? (
                      <Skeleton
                        aria-label='Loading current total'
                        height={34}
                        sx={{ bgcolor: 'rgba(255,255,255,0.24)' }}
                      />
                    ) : currentTotal === null ? (
                      '--'
                    ) : (
                      currentTotal.toLocaleString()
                    )}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: '#FFE7B7', fontSize: '0.78rem', fontWeight: 800 }}>Completion</Typography>
                  <Typography sx={{ color: '#FFFDF8', fontSize: '1.75rem', fontWeight: 900, lineHeight: 1 }}>
                    {loading ? (
                      <Skeleton
                        aria-label='Loading completion'
                        height={34}
                        sx={{ bgcolor: 'rgba(255,255,255,0.24)' }}
                      />
                    ) : currentTotal === null ? (
                      '--'
                    ) : (
                      `${percentage}%`
                    )}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: '#FFE7B7', fontSize: '0.78rem', fontWeight: 800 }}>Remaining</Typography>
                  <Typography sx={{ color: '#FFFDF8', fontSize: '1.75rem', fontWeight: 900, lineHeight: 1 }}>
                    {loading ? (
                      <Skeleton
                        aria-label='Loading remaining total'
                        height={34}
                        sx={{ bgcolor: 'rgba(255,255,255,0.24)' }}
                      />
                    ) : remaining === null ? (
                      '--'
                    ) : (
                      remaining.toLocaleString()
                    )}
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                aria-label='Naam Jap sankalp progress'
                variant='determinate'
                value={percentage}
                sx={{
                  'height': 11,
                  'borderRadius': '999px',
                  'backgroundColor': 'rgba(255, 248, 234, 0.22)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#FFE7A2',
                  },
                }}
              />
              <Typography sx={{ color: '#FFE7B7', fontSize: '0.82rem', mt: 1 }}>
                Goal: {currentTotal === null ? '--' : target.toLocaleString()} Naam Japs
              </Typography>
            </Box>
          </Box>
          <SubmitNiyamProgressForm />
        </Box>
      </PageContainer>
    </Box>
  );
}

export default SubmitNiyamProgressPage;
