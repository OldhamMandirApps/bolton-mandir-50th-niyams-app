import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Snackbar from './Snackbar';
import snackbarAtom, { SnackbarStatus } from './snackbarAtom';

jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material');

  return {
    ...actual,
    Snackbar: ({ autoHideDuration, children }: { autoHideDuration: number | null; children: React.ReactNode }) => (
      <div data-testid='mui-snackbar' data-auto-hide-duration={autoHideDuration ?? 'none'}>
        {children}
      </div>
    ),
  };
});

describe('Snackbar', () => {
  function renderSnackbar(status: SnackbarStatus) {
    return render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(snackbarAtom, {
            message: 'Feedback message',
            open: true,
            status,
          });
        }}
      >
        <Snackbar />
      </RecoilRoot>,
    );
  }

  test('auto-hides successful feedback', () => {
    renderSnackbar(SnackbarStatus.successful);

    expect(screen.getByTestId('mui-snackbar')).toHaveAttribute('data-auto-hide-duration', '2500');
  });

  test('keeps error feedback visible until dismissed', () => {
    renderSnackbar(SnackbarStatus.error);

    expect(screen.getByTestId('mui-snackbar')).toHaveAttribute('data-auto-hide-duration', 'none');
  });
});
