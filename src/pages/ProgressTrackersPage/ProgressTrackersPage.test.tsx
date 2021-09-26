import { render, screen } from '@testing-library/react';
import ProgressTrackersPage from './ProgressTrackersPage';
import { Niyam } from '../../config/niyams';
import { slugify } from '../../utils/string';
import { NiyamBuilder } from '../../../test/testUtils';
import useNiyamProgressInfo from '../../hooks/useNiyamProgressInfo';

jest.mock('../../hooks/useNiyamProgressInfo');

describe('ProgressTrackersPage', () => {
  function renderPage() {
    return render(<ProgressTrackersPage />);
  }

  const useNiyamProgressInfoMock = useNiyamProgressInfo as jest.Mock;

  test('should render progress trackers', () => {
    useNiyamProgressInfoMock.mockImplementation((niyam: Niyam) => {
      return {
        data: NiyamBuilder(niyam, 1000, 10000),
        loading: false,
        error: null,
      };
    });
    renderPage();

    screen.getByTestId(`tracker-${slugify(Niyam.ShantiPaath)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.JanmangalNamavali)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.JanmangalStotram)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.OradaNaPads)}`);
    screen.getByTestId(`tracker-${slugify(Niyam.UtsavKirtan)}`);
  });
});
