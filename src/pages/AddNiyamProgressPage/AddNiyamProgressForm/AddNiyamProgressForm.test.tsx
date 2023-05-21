import { render, screen } from '@testing-library/react';
import AddNiyamProgressForm from './AddNiyamProgressForm';
import useUpdateNiyamProgress from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import userEvent from '@testing-library/user-event';
import { Niyam } from '../../../config/niyams';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress');
describe('AddNiyamProgressForm', () => {
  const useUpdateNiyamProgressMock = useUpdateNiyamProgress as jest.Mock;

  beforeEach(() => {
    useUpdateNiyamProgressMock.mockReturnValue({ execute: jest.fn() });
  });

  function renderForm() {
    const view = render(
      <RecoilRoot>
        <MemoryRouter initialEntries={['/add-your-niyam-count']}>
          <AddNiyamProgressForm />
        </MemoryRouter>
      </RecoilRoot>,
    );
    return { view };
  }

  test('should render select and input fields and submit button', () => {
    renderForm();

    screen.getByTestId('niyam-select-field');
    screen.getByTestId('niyam-progress-input-field');
    screen.getByTestId('niyam-progress-submit-button');
  });

  test('should not update niyam progress if progress has not been inputted or niyam has not been selected', () => {
    const executeMock = jest.fn();
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock });

    renderForm();

    userEvent.click(screen.getByTestId('niyam-progress-submit-button'));

    expect(executeMock).not.toBeCalled();
  });

  test('should not update niyam progress if niyam has not been picked', () => {
    const executeMock = jest.fn();
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock });

    renderForm();

    userEvent.type(screen.getByTestId('niyam-progress-input-field'), '100');
    userEvent.click(screen.getByTestId('niyam-progress-submit-button'));

    expect(executeMock).not.toBeCalled();
  });

  test('should not update niyam progress if progress has not been inputted', async () => {
    const executeMock = jest.fn();
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock });

    renderForm();

    userEvent.click(screen.getByRole('button', { name: /select niyam/i }));
    userEvent.click(await screen.findByRole('option', { name: /janmangal namavali/i }));
    userEvent.click(screen.getByTestId('niyam-progress-submit-button'));

    expect(executeMock).not.toBeCalled();
  });

  test.skip('should update niyam progress when both niyam has been selected and progress has been inputted', async () => {
    const executeMock = jest.fn().mockImplementation(() => Promise.resolve());
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock });

    renderForm();

    userEvent.click(screen.getByRole('button', { name: /select niyam/i }));
    userEvent.click(await screen.findByRole('option', { name: /janmangal namavali/i }));
    userEvent.type(screen.getByRole('spinbutton', { name: /niyam count/i }), '100');

    userEvent.click(screen.getByTestId('niyam-progress-submit-button'));

    expect(executeMock).toHaveBeenCalledTimes(1);
    expect(executeMock).toBeCalledWith(Niyam.JanmangalNamavaliStotram, null, 100);

    // await waitFor(() => {
    //   expect(history.location.pathname).toEqual('/');
    // });
  });

  test.skip('should navigate to progress trackers page if niyam progress update was unsuccessful', async () => {
    const executeMock = jest.fn().mockImplementation(() => Promise.reject());
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock });

    renderForm();

    userEvent.click(screen.getByRole('button', { name: /select niyam/i }));
    userEvent.click(await screen.findByRole('option', { name: /janmangal namavali/i }));
    userEvent.type(screen.getByRole('spinbutton', { name: /niyam count/i }), '100');

    userEvent.click(screen.getByTestId('niyam-progress-submit-button'));

    // await waitFor(() => {
    //   expect(history.location.pathname).toEqual('/');
    // });
  });
});
