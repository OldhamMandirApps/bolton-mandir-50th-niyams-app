import { render, screen } from '@testing-library/react';
import AddNiyamsPage from './AddNiyamsPage';

describe('AddNiyamsPage', () => {
  function renderPage() {
    return render(<AddNiyamsPage />);
  }

  test('should render page heading', () => {
    renderPage();

    screen.getByText('Add Niyams');
  });
});
