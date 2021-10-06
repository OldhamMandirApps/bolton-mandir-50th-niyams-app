import { render, screen } from '@testing-library/react';
import NiyamProgressInput from './NiyamProgressInput';

describe('NiyamProgressInput', () => {
  function renderInputField() {
    return render(<NiyamProgressInput />);
  }

  test('should render input field for niyam progress input', () => {
    renderInputField();

    screen.getByRole('textbox', { name: /progress/i });
  });
});
