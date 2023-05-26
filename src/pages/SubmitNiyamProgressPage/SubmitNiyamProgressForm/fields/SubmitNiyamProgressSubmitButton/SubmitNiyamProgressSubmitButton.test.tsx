import { render, screen } from '@testing-library/react';
import SubmitNiyamProgressSubmitButton from './SubmitNiyamProgressSubmitButton';

describe('AddNiyamSubmitButton', () => {
  function renderSubmitButton() {
    return render(<SubmitNiyamProgressSubmitButton loading={false} />);
  }

  test('should render submit button', () => {
    renderSubmitButton();

    screen.getByRole('button', { name: /submit niyam progress/i });
  });
});
