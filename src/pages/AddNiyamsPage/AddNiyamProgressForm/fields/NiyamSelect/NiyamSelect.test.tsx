import { render, screen } from '@testing-library/react';
import NiyamSelect from './NiyamSelect';

describe('NiyamSelect', () => {
  function renderSelectField() {
    return render(<NiyamSelect />);
  }

  test('should render select field', () => {
    renderSelectField();

    screen.getByRole('button', { name: /select niyam/i });
  });
});
