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
          <Typography variant='h5' mt='16px' sx={{ textAlign: 'center', fontWeight: 'medium' }}>
            Install App
          </Typography>
          {iosInstallPrompt ? (
            <>
              <Typography paragraph mt='24px' sx={{ textAlign: 'center' }}>
                Tap
                <img
                  src={navigationIconIos}
                  alt='navigation action ios'
                  style={{ margin: 'auto 8px 8px', display: 'inline-block' }}
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
                <Button variant='contained' color='primary' onClick={handleWebInstallAccepted}>
                  Install
                </Button>
                <Button variant='contained' onClick={handleWebInstallDeclined}>
                  Close
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
