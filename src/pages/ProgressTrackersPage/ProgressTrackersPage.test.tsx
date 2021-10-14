import { render, screen } from '@testing-library/react';
import ProgressTrackersPage from './ProgressTrackersPage';
import { Niyam } from '../../config/niyams';
import { slugify } from '../../utils/string';
import { NiyamBuilder } from '../../../test/testUtils';
import useNiyamProgressInfo from '../../hooks/useNiyamProgressInfo';
import { RecoilRoot } from 'recoil';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/useNiyamProgressInfo');

describe('ProgressTrackersPage', () => {
  function renderPage() {
    const history = createMemoryHistory();
    const app = render(
      <RecoilRoot>
        <Router history={history}>
          <ProgressTrackersPage />
        </Router>
      </RecoilRoot>,
    );

    return { history, app };
  }

  const useNiyamProgressInfoMock = useNiyamProgressInfo as jest.Mock;

  test('should render progress trackers, page heading and add niyam progress button', () => {
    useNiyamProgressInfoMock.mockImplementation((niyam: Niyam) => {
      return {
        data: NiyamBuilder(niyam, 1000, 10000),
        loading: false,
        error: null,
      };
    });
    renderPage();

    screen.getByRole('heading', { name: /niyam progress/i });
    screen.getByRole('button', { name: /add your niyam progress/i });

    screen.getByTestId(`tracker-${slugify(Niyam.ShantiPaath)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.JanmangalNamavali)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.JanmangalStotram)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.OradaNaPads)}`);
  });

  test('should send to add niyam progress page when clicking on add your niyam progress button', () => {
    useNiyamProgressInfoMock.mockImplementation((niyam: Niyam) => {
      return {
        data: NiyamBuilder(niyam, 1000, 10000),
        loading: false,
        error: null,
      };
    });
    const { history } = renderPage();

    userEvent.click(screen.getByRole('button', { name: /add your niyam progress/i }));

    expect(history.location.pathname).toEqual('/add-your-niyam-progress');
  });
});
