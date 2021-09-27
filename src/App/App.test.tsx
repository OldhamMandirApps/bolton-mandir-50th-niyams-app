import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from '../config';

describe('App', () => {
  function renderApp(route: string) {
    window.history.replaceState({}, 'Test page', route);
    return render(
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>,
    );
  }

  test('should display progress trackers page', () => {
    renderApp('/');

    screen.getByTestId('progress-trackers-page');
  });

  test('should display add niyams page', () => {
    renderApp('/add-niyams');

    screen.getByTestId('add-niyams-page');
  });
});
