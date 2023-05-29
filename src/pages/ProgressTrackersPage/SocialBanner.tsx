import { Grid, Link, Typography } from '@mui/material';
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
            fontWeight: 600,
            fontSize: '18px',
            color: '#BC3606',
            py: '8px',
            textAlign: 'center',
          }}
        >
          Stay up to date with utsav announcements via
        </Typography>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 600,
            fontSize: '18px',
            color: '#BC3606',
            textAlign: 'center',
          }}
        >
          <Link
            href='https://nnd.link/bolton50'
            target='_blank'
            rel='noopener'
            underline='none'
            sx={{ color: '#CD9048' }}
          >
            nnd.link/bolton50
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SocialBanner;
