import { Grid, Link, Typography } from '@mui/material';
import { ReactComponent as InstagramIcon } from '../../images/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../images/facebook-icon.svg';
import { ReactComponent as YouTubeIcon } from '../../images/youtube-icon.svg';

function SocialBanner() {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      mb={4}
      py={1}
      sx={{ backgroundColor: '#F57100' }}
    >
      <Grid container spacing={1} justifyContent='center'>
        <Grid item>
          <InstagramIcon style={{ width: 35 }} />
        </Grid>
        <Grid item>
          <FacebookIcon style={{ width: 35 }} />
        </Grid>
        <Grid item>
          <YouTubeIcon style={{ width: 35 }} />
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
          Stay up to date via{' '}
          <Link href='https://nnd.link/bolton50' target='_blank' rel='noopener' ml='2px'>
            nnd.link/bolton50
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SocialBanner;
