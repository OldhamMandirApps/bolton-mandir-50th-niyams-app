import React from 'react';
import StyledTabs from '../StyledTabs/StyledTabs';
import StyledTab from '../StyledTab/StyledTab';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../TabPanel/TabPanel';

interface Tab {
  name: string;
  content: string[];
}

interface TabsContainerProps {
  tabs: Tab[];
}

function TabsContainer(props: TabsContainerProps): JSX.Element {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  function a11yProps(index: number) {
    return {
      'id': `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  return (
    <div data-testid='tabs-container'>
      <StyledTabs value={value} onChange={handleChange}>
        {props.tabs.map((tab) => (
          <StyledTab key={tab.name} label={tab.name} {...a11yProps(value)} />
        ))}
      </StyledTabs>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {props.tabs.map((tab, index) => (
          <TabPanel key={tab.name} index={index} value={value} content={tab.content} />
        ))}
      </SwipeableViews>
    </div>
  );
}

export default TabsContainer;
