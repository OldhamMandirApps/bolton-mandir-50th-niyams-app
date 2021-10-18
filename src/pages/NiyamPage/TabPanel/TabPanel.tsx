import React from 'react';
import { Box, Typography } from '@mui/material';

interface TabPanelProps {
  index: number;
  value: number;
  content: string[];
}

function TabPanel(props: TabPanelProps): JSX.Element {
  const { value, index, content, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p='24px'>
          {content.map((line, idx) => (
            <Typography key={idx} paragraph whiteSpace='pre-line'>
              {line}
            </Typography>
          ))}
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
