import { Grid, Link, Typography } from '@mui/material';

function Footer() {
  return (
    <Grid container alignItems='center' flexDirection='column' >
      <hr style={{ width: '65vw', border: '1px solid lightgrey' }} />
      <Typography
          variant='h6'
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            color: '#BC3606',
            textAlign: 'center',
          }}
        >
          Keep up to date below
        </Typography>

      <Link
            href='https://nnd.link/bolton'
            target='_blank'
            rel='noopener'
            underline='none'
            sx={{ color: '#CD9048' }}
          >
            nnd.link/bolton
          </Link>

    </Grid>
  );
}

export default Footer;
