import React from 'react';
import NiyamTabs from '../NiyamTabs';
import NiyamTabPanels from '../NiyamTabPanels';

interface TabsContainerProps {
  tabs: Tab[] | undefined;
  tabIndex: number | undefined;
}

function TabsContainer(props: TabsContainerProps): JSX.Element {
  const { tabs, tabIndex = 0 } = props;
  const [value, setValue] = React.useState<number>(tabIndex);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeTabPanel = (index: number) => {
    setValue(index);
  };

  return (
    <div data-testid='tabs-container'>
      <NiyamTabs tabIndex={value} onTabChange={handleTabChange} tabs={tabs} />
      <NiyamTabPanels tabIndex={value} onTabChange={handleChangeTabPanel} tabs={tabs} />
    </div>
  );
}

export default TabsContainer;
