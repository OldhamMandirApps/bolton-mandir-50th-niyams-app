import React from 'react';
import StyledTab from '../StyledTab';
import StyledTabs from '../StyledTabs';

interface NiyamTabsProps {
  tabIndex: number;
  onTabChange: (event: React.SyntheticEvent<Element, Event>, newValue: number) => void;
  tabs: Tab[];
}

function NiyamTabs(props: NiyamTabsProps): JSX.Element {
  const { tabIndex, onTabChange, tabs } = props;

  function a11yProps(index: number) {
    return {
      'id': `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  return (
    <StyledTabs value={tabIndex} onChange={onTabChange}>
      {tabs.map((tab) => (
        <StyledTab key={tab.name} label={tab.name} {...a11yProps(tabIndex)} />
      ))}
    </StyledTabs>
  );
}

export default NiyamTabs;
