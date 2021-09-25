import { render, screen } from '@testing-library/react';
import ProgressTracker from './ProgressTracker';
import { Niyam } from '../../config/niyams';

describe('ProgressTracker', () => {
  function renderComponent(niyam: Niyam = Niyam.OradaNaPads) {
    return render(<ProgressTracker niyam={niyam} />);
  }

  test('should render page header', () => {
    renderComponent(Niyam.OradaNaPads);

    screen.getByTestId('tracker-orada-na-pads');
    screen.getByText('Progress Tracker');
  });
});
