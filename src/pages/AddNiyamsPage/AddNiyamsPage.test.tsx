import { render, screen } from '@testing-library/react';
import AddNiyamsPage from './AddNiyamsPage';

describe('AddNiyamsPage', () => {
  function renderPage() {
    return render(<AddNiyamsPage />);
  }

  test('should render page heading and components to add niyam', () => {
    renderPage();

    screen.getByRole('heading', { name: /add niyams/i });
    screen.getByTestId('add-niyam-progress-form');
  });
});
