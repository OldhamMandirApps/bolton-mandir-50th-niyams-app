import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import AddNiyamProgressForm from './AddNiyamProgressForm';
import Snackbar from '../../ProgressTrackersPage/Snackbar';
import useUpdateNiyamProgress from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import userEvent from '@testing-library/user-event';

jest.mock('../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress');
describe('AddNiyamProgressForm/Snackbar Integration Test', () => {
  const useUpdateNiyamProgressMock = useUpdateNiyamProgress as jest.Mock;

  beforeEach(() => {
    useUpdateNiyamProgressMock.mockReturnValue({ execute: jest.fn() });
  });

  function renderComponent() {
    const view = render(
      <RecoilRoot>
        <MemoryRouter initialEntries={['/add-your-niyam-count']}>
          <Snackbar />
          <AddNiyamProgressForm />
        </MemoryRouter>
      </RecoilRoot>,
    );
    return { view };
  }

  test('should display success snackbar if successful updating niyam progress', async () => {
    const executeMock = jest.fn().mockImplementation(() => Promise.resolve());
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock });
    renderComponent();

    userEvent.click(screen.getByRole('button', { name: /select niyam/i }));
    userEvent.click(screen.getByRole('option', { name: /janmangal namavali/i }));
    userEvent.type(screen.getByRole('spinbutton', { name: /niyam count/i }), '100');

    userEvent.click(screen.getByTestId('niyam-progress-submit-button'));

    await screen.findByRole('alert');
    screen.getByText('You have successfully registered your niyam progress!');
  });

  test('should display error snackbar if error updating niyam progress', async () => {
    const executeMock = jest.fn().mockImplementation(() => Promise.reject());
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock });
    renderComponent();

    userEvent.click(screen.getByRole('button', { name: /select niyam/i }));
    userEvent.click(screen.getByRole('option', { name: /janmangal namavali/i }));
    userEvent.type(screen.getByRole('spinbutton', { name: /niyam count/i }), '100');

    userEvent.click(screen.getByTestId('niyam-progress-submit-button'));

    await screen.findByRole('alert');
    screen.getByText('Something went wrong whilst registering your niyam progress. Please try again later.');
  });
});
