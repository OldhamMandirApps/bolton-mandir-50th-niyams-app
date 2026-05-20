import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./FirebaseApp', () => ({ children }: { children: React.ReactNode }) => <>{children}</>);
jest.mock('../pages/SubmitNiyamProgressPage', () => () => <div data-testid='submit-niyam-progress-page' />);
jest.mock('../pages/ProgressTrackersPage/Snackbar', () => () => <div data-testid='global-snackbar' />);

describe('App', () => {
  function renderApp(route: string) {
    window.history.replaceState({}, 'Test page', route);
    return render(<App />);
  }

  test.each([
    { path: '/', testId: 'submit-niyam-progress-page' },
    { path: '/submit-niyam-progress', testId: 'submit-niyam-progress-page' },
  ])('should display $testId at $path', ({ path, testId }) => {
    renderApp(path);

    screen.getByTestId(testId);
  });

  test('mounts the global snackbar shell', () => {
    renderApp('/');

    screen.getByTestId('global-snackbar');
  });
});
