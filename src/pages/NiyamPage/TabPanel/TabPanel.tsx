import React from 'react';
import { Box, styled, Typography } from '@mui/material';

interface TabPanelProps {
  index: number;
  value: number;
  content: string[];
}

const NiyamContentBox = styled(Box)(({ theme }) => ({
  padding: '24px',
  paddingLeft: 0,
  textAlign: 'center',
}));

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
        <NiyamContentBox>
          {content.map((line, idx) => (
            <Typography
              key={idx}
              paragraph
              whiteSpace='pre-line'
              dangerouslySetInnerHTML={{ __html: line }}
              fontSize='1.3rem'
            />
          ))}
        </NiyamContentBox>
      )}
    </div>
  );
}

export default TabPanel;
