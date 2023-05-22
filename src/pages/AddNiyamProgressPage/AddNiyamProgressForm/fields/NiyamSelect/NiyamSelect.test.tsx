import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Niyam } from '../../../../../config/niyams';

describe('NiyamSelect', () => {
  function renderSelectField(value: Niyam | null, setValue: jest.Mock) {
    // return render(<NiyamSelect value={value} setValue={setValue} />);
  }

  test('should render select field', () => {
    renderSelectField(null, jest.fn());

    screen.getByRole('button', { name: /niyam/i });
  });

  test('should display all niyams in drop-down list when clicking on select field', () => {
    renderSelectField(null, jest.fn());

    userEvent.click(screen.getByRole('button', { name: /select niyam/i }));

    screen.getByRole('option', { name: /shanti paath/i });
    screen.getByRole('option', { name: /janmangal namavali\/stotram/i });
    screen.getByRole('option', { name: /bhaktachintamani\/vachanamrut/i });
    screen.getByRole('option', { name: /orada na pads/i });
  });

  test('should call setValue function when niyam is selected', () => {
    const setValueMock = jest.fn();
    renderSelectField({ id: '', label: '' }, setValueMock);

    userEvent.click(screen.getByRole('button', { name: /select niyam/i }));
    userEvent.click(screen.getByRole('option', { name: /orada na pads/i }));

    expect(setValueMock).toBeCalledWith({ id: '', label: '' });
  });
});
