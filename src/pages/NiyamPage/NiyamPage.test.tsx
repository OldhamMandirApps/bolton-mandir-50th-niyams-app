import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../test/testUtils';
import NiyamPage from './NiyamPage';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
    };
  },
}));

describe('NiyamPage', () => {
  function renderPage(niyamId: string) {
    return renderWithRouter(<NiyamPage />, '/niyam/:niyamId', { route: `/niyam/${niyamId}` });
  }

  test.each([{ niyamId: 'orada-na-pads' }])('should be able to read niyams', ({ niyamId }) => {
    renderPage(niyamId);

    screen.getByTestId(niyamId);
  });

  test('should render 404 if niyam is not valid', () => {
    renderPage('not-a-valid-niyam');

    screen.getByTestId('404-page');
  });
});
