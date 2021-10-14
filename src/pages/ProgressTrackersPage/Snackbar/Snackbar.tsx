import React from 'react';
import { useRecoilState } from 'recoil';
import snackbarAtom, { SnackbarStatus } from './snackbarAtom';
import { Alert, AlertColor, Snackbar as MuiSnackbar } from '@mui/material';

function Snackbar(): JSX.Element | null {
  const [snackbarData, setSnackbarData] = useRecoilState(snackbarAtom);

  const handleClose = () => {
    setSnackbarData({ ...snackbarData, open: false });
  };

  if (snackbarData.status !== SnackbarStatus.empty) {
    return (
      <div data-testid='status-snackbar'>
        <MuiSnackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={snackbarData.open}
          autoHideDuration={SnackbarStatus.successful ? 2500 : null}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={snackbarData.status as AlertColor} data-testid='status-snackbar-text'>
            {snackbarData.message}
          </Alert>
        </MuiSnackbar>
      </div>
    );
  } else {
    return null;
  }
}

export default Snackbar;
