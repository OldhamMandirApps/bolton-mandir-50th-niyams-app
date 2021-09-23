import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  function renderApp(route: string) {
    window.history.replaceState({}, 'Test page', route);
    return render(<App />);
  }

  test('should display progress trackers page', async () => {
    renderApp('/');

    screen.getByTestId('progress-trackers-page');
  });
});
