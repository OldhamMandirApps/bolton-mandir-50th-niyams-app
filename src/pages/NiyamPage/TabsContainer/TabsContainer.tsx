import React from 'react';
import NiyamTabs from '../NiyamTabs';
import NiyamTabPanels from '../NiyamTabPanels';

interface TabsContainerProps {
  tabs: Tab[];
}

function TabsContainer(props: TabsContainerProps): JSX.Element {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeTabPanel = (index: number) => {
    setValue(index);
  };

  return (
    <div data-testid='tabs-container'>
      <NiyamTabs tabIndex={value} onTabChange={handleTabChange} tabs={props.tabs} />
      <NiyamTabPanels tabIndex={value} onTabChange={handleChangeTabPanel} tabs={props.tabs} />
    </div>
  );
}

export default TabsContainer;
