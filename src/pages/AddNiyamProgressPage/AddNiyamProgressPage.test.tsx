import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import useUpdateNiyamProgress from '../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress';
import AddNiyamProgressPage from './AddNiyamProgressPage';

jest.mock('../../hooks/useUpdateNiyamProgress/useUpdateNiyamProgress');
describe('AddNiyamProgressPage', () => {
  const useUpdateNiyamProgressMock = useUpdateNiyamProgress as jest.Mock;

  beforeEach(() => {
    useUpdateNiyamProgressMock.mockReturnValue({ execute: jest.fn() });
  });

  function renderPage() {
    return render(
      <RecoilRoot>
        <AddNiyamProgressPage />
      </RecoilRoot>,
    );
  }

  test('should render page heading and components to add niyam', () => {
    renderPage();

    screen.getByRole('heading', { name: /add your niyam progress/i });
    screen.getByTestId('add-niyam-progress-form');
  });
});
