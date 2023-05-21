import { RecoilRoot } from 'recoil';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ProgressTrackersPage from './ProgressTrackersPage';
import { Niyam } from '../../config/niyams';
import { slugify } from '../../utils/string';
import { NiyamBuilder } from '../../../test/testUtils';
import useNiyamProgressInfo from '../../hooks/useNiyamProgressInfo';

jest.mock('../../hooks/useNiyamProgressInfo');

describe('ProgressTrackersPage', () => {
  function renderPage() {
    const view = render(
      <RecoilRoot>
        <ProgressTrackersPage />
      </RecoilRoot>,
      { wrapper: BrowserRouter },
    );

    return { view };
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
    screen.getByRole('button', { name: /add your niyam count/i });

    screen.getByTestId(`tracker-${slugify(Niyam.ShantiPaath)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.JanmangalNamavaliStotram)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.OradaNaPads)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.BhaktachintamaniVachanamrut)}`);
  });

  test.skip('should send to add niyam progress page when clicking on add your niyam progress button', () => {
    useNiyamProgressInfoMock.mockImplementation((niyam: Niyam) => {
      return {
        data: NiyamBuilder(niyam, 1000, 10000),
        loading: false,
        error: null,
      };
    });
    renderPage();

    userEvent.click(screen.getByRole('button', { name: /add your niyam count/i }));

    // expect(history.location.pathname).toEqual('/add-your-niyam-count');
  });
});
