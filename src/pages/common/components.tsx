import React from 'react';
import { Container, Typography } from '@mui/material';

function PageContainer(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children, ...other } = props;
  return (
    <Container maxWidth={false} sx={{ mt: 2, p: 2, mx: 0 }} {...other}>
      {children}
    </Container>
  );
}

function H1(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children, ...other } = props;
  return (
    <Typography variant='h4' component='h1' sx={{ fontWeight: 700, mb: 4 }} {...other}>
      {children}
    </Typography>
  );
}

export { PageContainer, H1 };
