import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import useUpdateNiyamProgress from '../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import Snackbar from '../../ProgressTrackersPage/Snackbar';
import AddNiyamProgressForm from './SubmitNiyamProgressForm';

jest.mock('../../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress');

describe('AddNiyamProgressForm/Snackbar Integration Test', () => {
  const useUpdateNiyamProgressMock = useUpdateNiyamProgress as jest.Mock;

  beforeEach(() => {
    localStorage.clear();
    useUpdateNiyamProgressMock.mockReturnValue({ execute: jest.fn(), status: 'not-requested' });
  });

  function renderComponent() {
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

  async function submitNaamJap(user: ReturnType<typeof userEvent.setup>) {
    await user.type(screen.getByRole('textbox', { name: /full name/i }), 'Test Bhakta');
    await user.type(screen.getByRole('spinbutton', { name: /number of Naam Japs completed/i }), '7');
    await user.click(screen.getByRole('button', { name: /submit Naam Jap total/i }));
    await user.click(await screen.findByRole('button', { name: /^yes$/i }));
  }

  test('displays success snackbar after successful update', async () => {
    useUpdateNiyamProgressMock.mockReturnValue({
      execute: jest.fn().mockResolvedValue(undefined),
      status: 'not-requested',
    });
    const { user } = renderComponent();

    await submitNaamJap(user);

    expect(await screen.findAllByText('Added 7 Naam Japs. Thank you for contributing to the sankalp.')).toHaveLength(2);
  });

  test('displays error snackbar after failed update', async () => {
    useUpdateNiyamProgressMock.mockReturnValue({
      execute: jest.fn().mockRejectedValue(new Error('Firestore failed')),
      status: 'not-requested',
    });
    const { user } = renderComponent();

    await submitNaamJap(user);

    expect(
      await screen.findAllByText(
        "We couldn't save your Naam Japs. Please try again. Your entered number is still here.",
      ),
    ).toHaveLength(2);
  });
});
