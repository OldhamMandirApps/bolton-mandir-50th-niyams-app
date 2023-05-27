import { render, screen } from '@testing-library/react';
import ProgressTracker from './ProgressTracker';
import { Niyam } from '../../../config/niyams';
import useNiyamProgressInfo from '../../../hooks/useNiyamProgressInfo';
import { NiyamBuilder } from '../../../../test/testUtils';

jest.mock('../../../hooks/useNiyamProgressInfo');

describe('ProgressTracker', () => {
  function renderComponent(niyam: Niyam = { id: '', label: '', timeBased: false }) {
    return render(<ProgressTracker niyam={niyam} />);
  }

  const useNiyamProgressInfoMock = useNiyamProgressInfo as jest.Mock;

  test('should render progress and target information for niyam', () => {
    const niyam = { id: '', label: '', timeBased: false };
    const progress = 10000;
    const target = 40000;
    useNiyamProgressInfoMock.mockImplementationOnce(() => {
      return {
        data: NiyamBuilder(niyam.id, progress, target),
        loading: false,
        error: null,
      };
    });
    renderComponent(niyam);

    screen.getByTestId('tracker-orada-na-pads');
    screen.getByText(niyam.id);
    screen.getByText(`${progress} / ${target}`);
  });
});
