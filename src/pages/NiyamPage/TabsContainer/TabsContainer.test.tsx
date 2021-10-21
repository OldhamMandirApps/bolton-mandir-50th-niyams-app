import { render, screen } from '@testing-library/react';
import TabsContainer from './TabsContainer';

describe('TabsContainer', () => {
  function renderContainer() {
    return render(<TabsContainer tabs={[]} tabIndex={0} />);
  }

  test('should render tabs and panels', () => {
    renderContainer();

    screen.getByTestId('niyam-tabs');
    screen.getByTestId('niyam-tab-panels');
  });
});
