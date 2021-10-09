import { render, screen } from '@testing-library/react';
import NiyamProgressInput from './NiyamProgressInput';
import userEvent from '@testing-library/user-event';

describe('NiyamProgressInput', () => {
  function renderInputField(value: number | null, setValue: jest.Mock) {
    return render(<NiyamProgressInput value={value} setValue={setValue} />);
  }

  test('should render input field for niyam progress input', () => {
    renderInputField(0, jest.fn());

    screen.getByRole('spinbutton', { name: /progress/i });
  });

  test('should call setValue function when niyam progress is entered', () => {
    const setValueMock = jest.fn();
    renderInputField(null, setValueMock);

    userEvent.type(screen.getByRole('spinbutton', { name: /progress/i }), '100');

    expect(setValueMock).toBeCalledWith(100);
  });

  test('should set value to be empty string if value is null', () => {
    renderInputField(null, jest.fn());

    expect(screen.getByRole('spinbutton', { name: /progress/i })).toHaveDisplayValue('');
  });
  // TODO: test for minimum 1 no negative values
  // TODO: test for setting value to null if removing entire value
});
