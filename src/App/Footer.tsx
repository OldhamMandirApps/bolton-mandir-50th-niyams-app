import { Grid, Typography } from '@mui/material';
import MandirLogo from '../images/mandir-logo.png';

function Footer() {
  return (
    <Grid container alignItems='center' flexDirection='column' py={2}>
      <hr style={{ width: '65vw', border: '1px solid lightgrey' }} />
      <img src={MandirLogo} alt='mandir logo' style={{ maxHeight: '100px', paddingBottom: '4px' }} />
      <Typography sx={{ color: '#BC3606', fontFamily: 'Merriweather Sans', fontSize: '12px' }}>EST. 1973</Typography>
    </Grid>
  );
}

export default Footer;
