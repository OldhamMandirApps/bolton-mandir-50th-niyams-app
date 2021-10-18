import { render, screen } from '@testing-library/react';
import { NiyamOption } from '../../../config/niyams';
import NiyamTabs from './NiyamTabs';
import { resources } from '../../../config/i18n';

describe('NiyamTabs', () => {
  function getTabs(niyamId: NiyamOption) {
    return resources.en[niyamId].tabs;
  }

  function renderTabs(tabs: Tab[], onTabChange = jest.fn()) {
    return render(<NiyamTabs tabIndex={0} onTabChange={onTabChange} tabs={tabs} />);
  }

  test.each([
    {
      tabs: getTabs('janmangal-namavali-stotram'),
      tabTitles: ['Janmangal Namavali', 'Janmangal Stotram'],
    },
  ])('should display correct tab titles', ({ tabs, tabTitles }) => {
    renderTabs(tabs);

    const tabElements = screen.getAllByRole('tab');

    expect(tabElements.map((tab) => tab.textContent)).toEqual(tabTitles);
  });
});
