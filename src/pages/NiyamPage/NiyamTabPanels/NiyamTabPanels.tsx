import TabPanel from '../TabPanel/TabPanel';
import SwipeableViews from 'react-swipeable-views';
import React from 'react';

interface NiyamTabPanelsProps {
  tabIndex: number;
  onTabChange: (tabIndex: number) => void;
  tabs: Tab[];
}

function NiyamTabPanels(props: NiyamTabPanelsProps): JSX.Element {
  const { tabIndex, onTabChange, tabs } = props;

  return (
    <SwipeableViews index={tabIndex} onChangeIndex={onTabChange}>
      {tabs.map((tab, index) => (
        <TabPanel key={tab.name} index={index} value={tabIndex} content={tab.content} />
      ))}
    </SwipeableViews>
  );
}

export default NiyamTabPanels;
