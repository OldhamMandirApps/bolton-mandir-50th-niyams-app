import { render, screen } from '@testing-library/react';
import AddNiyamProgressSubmitButton from './AddNiyamProgressSubmitButton';

describe('AddNiyamSubmitButton', () => {
  function renderSubmitButton() {
    return render(<AddNiyamProgressSubmitButton />);
  }

  test('should render submit button', () => {
    renderSubmitButton();

    screen.getByRole('button', { name: /submit niyam progress/i });
  });
});
