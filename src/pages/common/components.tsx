import React from 'react';
import { Container, Typography, TypographyProps } from '@mui/material';

function PageContainer(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children, ...other } = props;
  return (
    <Container maxWidth={false} sx={{ p: 1, mx: 0 }} {...other}>
      {children}
    </Container>
  );
}

function H1(props: TypographyProps<'h1', { component?: 'h1' }>): JSX.Element {
  const { children, ...other } = props;
  return (
    <Typography
      variant='h4'
      sx={{
        fontWeight: 700,
        fontSize: '1.875rem',
        hyphens: 'auto',
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        color: '#042139',
      }}
      {...other}
    >
      {children}
    </Typography>
  );
}

export { PageContainer, H1 };
