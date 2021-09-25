import { render, screen } from '@testing-library/react';
import ProgressTrackersPage from './ProgressTrackersPage';

describe('ProgressTrackersPage', () => {
  function renderPage() {
    return render(<ProgressTrackersPage />);
  }

  test('should render page header', () => {
    renderPage();

    screen.getByText('Progress Trackers Page');
  });
});
