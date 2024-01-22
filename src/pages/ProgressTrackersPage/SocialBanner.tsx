import { Grid, Typography } from '@mui/material';
import { ReactComponent as InstagramIcon } from '../../images/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../images/facebook-icon.svg';
import { ReactComponent as YouTubeIcon } from '../../images/youtube-icon.svg';

function SocialBanner() {
  return (
    <Grid container direction='column' alignItems='center' justifyContent='center' py={1}>
      <Grid container spacing={1} justifyContent='center'>
        <Grid item>
          <a href='https://instagram.com/sksstbolton' target='_blank' rel='noopener noreferrer'>
            <InstagramIcon style={{ width: 35 }} />
          </a>
        </Grid>
        <Grid item>
          <a href='https://www.facebook.com/sksstbolton/' target='_blank' rel='noopener noreferrer'>
            <FacebookIcon style={{ width: 35 }} />
          </a>
        </Grid>
        <Grid item>
          <a href='https://www.youtube.com/@SKSSTempleBolton/featured' target='_blank' rel='noopener noreferrer'>
            <YouTubeIcon style={{ width: 35 }} />
          </a>
        </Grid>
      </Grid>
      <Grid item>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            color: '#BC3606',
            textAlign: 'center',
          }}
        >
          Celebrating 200 years of Vandu pads
        </Typography>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 600,
            fontSize: '18px',
            textAlign: 'center',
          }}
        >
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SocialBanner;
