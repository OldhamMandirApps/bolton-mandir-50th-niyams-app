import useIosInstallPrompt from './useIosInstallPrompt';
import useWebInstallPrompt from './useWebInstallPrompt';
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import appIcon from '../../images/app-icon.svg';
import navigationIconIos from '../../images/navigation-action-ios.png';

function InstallPwaPrompt(): JSX.Element | null {
  const [iosInstallPrompt, handleIOSInstallDeclined] = useIosInstallPrompt();
  const [webInstallPrompt, handleWebInstallDeclined, handleWebInstallAccepted] = useWebInstallPrompt();

  if (!iosInstallPrompt && !webInstallPrompt) {
    return null;
  }

  return (
    <Modal open sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box p='32px' sx={{ backgroundColor: 'white', minWidth: '500px', maxWidth: '100%' }}>
        <img
          src={appIcon}
          alt='app icon'
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            borderTopRightRadius: '50%',
            borderTopLeftRadius: '50%',
            backgroundColor: '#fff',
            marginTop: '-80px',
          }}
          width='100px'
        />
        <Box>
          <Typography
            variant='h5'
            sx={{
              py: '16px',
              textAlign: 'center',
              fontWeight: 'medium',
              fontFamily: "'Merriweather Sans', sans-serif",
            }}
          >
            Install App
          </Typography>
          {iosInstallPrompt ? (
            <>
              <Typography paragraph sx={{ textAlign: 'center' }}>
                Tap
                <img
                  src={navigationIconIos}
                  alt='navigation action ios'
                  style={{ marginLeft: '8px', marginRight: '8px' }}
                  width='20'
                />
                then &quot;Add to Home Screen&quot;
              </Typography>
              <Grid container justifyContent='center'>
                <Button variant='contained' onClick={handleIOSInstallDeclined}>
                  Close
                </Button>
              </Grid>
            </>
          ) : null}
          {webInstallPrompt ? (
            <>
              <Grid container justifyContent='space-around' mt='24px'>
                <Button variant='contained' onClick={handleWebInstallDeclined}>
                  Close
                </Button>
                <Button variant='contained' color='primary' onClick={handleWebInstallAccepted}>
                  Install
                </Button>
              </Grid>
            </>
          ) : null}
        </Box>
      </Box>
    </Modal>
  );
}

export default InstallPwaPrompt;
