import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import useNiyamProgressInfo from '../../hooks/useNiyamProgressInfo';
import useUpdateNiyamProgress from '../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import SubmitNiyamProgressPage from './SubmitNiyamProgressPage';

jest.mock('../../hooks/useNiyamProgressInfo');
jest.mock('../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress');

describe('SubmitNiyamProgressPage', () => {
  const useNiyamProgressInfoMock = useNiyamProgressInfo as jest.Mock;
  const useUpdateNiyamProgressMock = useUpdateNiyamProgress as jest.Mock;

  beforeEach(() => {
    useUpdateNiyamProgressMock.mockReturnValue({ execute: jest.fn(), status: 'not-requested' });
  });

  function renderPage() {
    return render(
      <RecoilRoot>
        <SubmitNiyamProgressPage />
      </RecoilRoot>,
    );
  }

  test('renders Firestore-backed sankalp totals', () => {
    useNiyamProgressInfoMock.mockReturnValue({
      data: {
        label: 'Swaminarayan Mahamantra Jap',
        progress: 1234,
        target: 2000000,
      },
      error: null,
      loading: false,
    });

    renderPage();

    screen.getByRole('heading', { name: /submit your Naam Jap total/i });
    screen.getByText('1,234');
    screen.getByText('0%');
    screen.getByText('1,998,766');
    screen.getByText('Goal: 2,000,000 Naam Japs');
    screen.getByTestId('add-niyam-progress-form');
  });

  test('shows loading placeholders instead of a fake zero total', () => {
    useNiyamProgressInfoMock.mockReturnValue({
      data: null,
      error: null,
      loading: true,
    });

    renderPage();

    screen.getByText('Loading current sankalp total...');
    screen.getByLabelText('Loading current total');
    expect(screen.queryByText('Current total', { exact: false })).toBeInTheDocument();
    expect(screen.queryByText(/^0$/)).not.toBeInTheDocument();
  });

  test('shows an error message when the current total cannot be loaded', () => {
    useNiyamProgressInfoMock.mockReturnValue({
      data: null,
      error: new Error('Firestore failed'),
      loading: false,
    });

    renderPage();

    screen.getByText("We couldn't load the current total. Please refresh and try again.");
    expect(screen.getAllByText('--')).toHaveLength(3);
    screen.getByText('Goal: -- Naam Japs');
  });

  test('shows an error message instead of crashing when total data is missing', () => {
    useNiyamProgressInfoMock.mockReturnValue({
      data: undefined,
      error: null,
      loading: false,
    });

    renderPage();

    screen.getByText("We couldn't load the current total. Please refresh and try again.");
    expect(screen.getAllByText('--')).toHaveLength(3);
    screen.getByText('Goal: -- Naam Japs');
  });
});
