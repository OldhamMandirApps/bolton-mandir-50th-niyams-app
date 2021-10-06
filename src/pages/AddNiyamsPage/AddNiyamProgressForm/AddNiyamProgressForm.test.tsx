import { render, screen } from '@testing-library/react';
import AddNiyamProgressForm from './AddNiyamProgressForm';

describe('AddNiyamProgressForm', () => {
  function renderForm() {
    return render(<AddNiyamProgressForm />);
  }

  test('should render select and input fields and submit button', () => {
    renderForm();

    screen.getByTestId('niyam-select-field');
    screen.getByTestId('niyam-progress-input-field');
    screen.getByTestId('niyam-progress-submit-button');
  });
});
