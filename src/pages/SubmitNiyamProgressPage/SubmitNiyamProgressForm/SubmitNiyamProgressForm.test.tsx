import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import useUpdateNiyamProgress from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import Snackbar from '../../ProgressTrackersPage/Snackbar';
import AddNiyamProgressForm from './SubmitNiyamProgressForm';

jest.mock('../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress');

describe('AddNiyamProgressForm', () => {
  const useUpdateNiyamProgressMock = useUpdateNiyamProgress as jest.Mock;

  beforeEach(() => {
    localStorage.clear();
    useUpdateNiyamProgressMock.mockReturnValue({ execute: jest.fn(), status: 'not-requested' });
  });

  function renderForm() {
    return {
      user: userEvent.setup(),
      ...render(
        <RecoilRoot>
          <MemoryRouter>
            <Snackbar />
            <AddNiyamProgressForm />
          </MemoryRouter>
        </RecoilRoot>,
      ),
    };
  }

  async function fillFullName(user: ReturnType<typeof userEvent.setup>) {
    await user.type(screen.getByRole('textbox', { name: /full name/i }), 'Test Bhakta');
  }

  async function confirmSubmission(user: ReturnType<typeof userEvent.setup>) {
    await user.click(await screen.findByRole('button', { name: /^yes$/i }));
  }

  test('keeps Naam Jap submit disabled until a positive number is entered', async () => {
    const { user } = renderForm();
    const submitButton = screen.getByRole('button', { name: /submit Naam Jap total/i });

    expect(submitButton).toBeDisabled();

    await user.type(screen.getByRole('spinbutton', { name: /number of Naam Japs completed/i }), '12');

    expect(submitButton).toBeEnabled();
  });

  test('submits a Naam Jap total with the Mahamantra backend payload', async () => {
    const executeMock = jest.fn().mockResolvedValue(undefined);
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock, status: 'not-requested' });
    const { user } = renderForm();

    await fillFullName(user);
    await user.type(screen.getByRole('spinbutton', { name: /number of Naam Japs completed/i }), '12');
    await user.click(screen.getByRole('button', { name: /submit Naam Jap total/i }));
    await confirmSubmission(user);

    await waitFor(() => expect(executeMock).toHaveBeenCalledTimes(1));
    expect(executeMock).toHaveBeenCalledWith({
      ageGroup: 'Not collected',
      fullName: 'Test Bhakta',
      mandirName: 'Not collected',
      niyam: {
        id: 'Mahamantra',
        label: 'Swaminarayan Mahamantra Jap',
        timeBased: false,
      },
      progress: 12,
    });
  });

  test('converts malas to Naam Japs before submitting', async () => {
    const executeMock = jest.fn().mockResolvedValue(undefined);
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock, status: 'not-requested' });
    const { user } = renderForm();

    await fillFullName(user);
    await user.click(screen.getByRole('tab', { name: /malas/i }));
    await user.type(screen.getByRole('spinbutton', { name: /number of malas/i }), '3');
    screen.getByText('324 japs');

    await user.click(screen.getByRole('button', { name: /submit malas as Naam Jap total/i }));
    await confirmSubmission(user);

    await waitFor(() => expect(executeMock).toHaveBeenCalledTimes(1));
    expect(executeMock).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: 'Test Bhakta',
        progress: 324,
      }),
    );
  });

  test('shows success feedback and clears the submitted Naam Jap count', async () => {
    const executeMock = jest.fn().mockResolvedValue(undefined);
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock, status: 'not-requested' });
    const { user } = renderForm();

    await fillFullName(user);
    const progressInput = screen.getByRole('spinbutton', { name: /number of Naam Japs completed/i });
    await user.type(progressInput, '20');
    await user.click(screen.getByRole('button', { name: /submit Naam Jap total/i }));
    await confirmSubmission(user);

    await screen.findAllByText('Added 20 Naam Japs. Thank you for contributing to the sankalp.');
    await waitFor(() => expect(progressInput).toHaveDisplayValue(''));
    expect(screen.getByRole('textbox', { name: /full name/i })).toHaveDisplayValue('Test Bhakta');
  });

  test('shows error feedback and preserves the entered count when submit fails', async () => {
    const executeMock = jest.fn().mockRejectedValue(new Error('Firestore failed'));
    useUpdateNiyamProgressMock.mockReturnValue({ execute: executeMock, status: 'not-requested' });
    const { user } = renderForm();

    await fillFullName(user);
    const progressInput = screen.getByRole('spinbutton', { name: /number of Naam Japs completed/i });
    await user.type(progressInput, '55');
    await user.click(screen.getByRole('button', { name: /submit Naam Jap total/i }));
    await confirmSubmission(user);

    await screen.findAllByText("We couldn't save your Naam Japs. Please try again. Your entered number is still here.");
    expect(progressInput).toHaveDisplayValue('55');
  });
});
