import { render, screen } from '@testing-library/react';
import NiyamSelect from './NiyamSelect';
import userEvent from '@testing-library/user-event';

describe('NiyamSelect', () => {
  function renderSelectField() {
    return render(<NiyamSelect />);
  }

  test('should render select field', () => {
    renderSelectField();

    screen.getByRole('button', { name: /select niyam/i });
  });

  test('should display all niyams in drop-down list when clicking on select field', () => {
    renderSelectField();

    userEvent.click(screen.getByRole('button', { name: /select niyam/i }));

    screen.getByRole('option', { name: /shanti paath/i });
    screen.getByRole('option', { name: /janmangal namavali/i });
    screen.getByRole('option', { name: /janmangal stotram/i });
    screen.getByRole('option', { name: /orada na pads/i });
    screen.getByRole('option', { name: /utsav kirtan/i });
  });
});
