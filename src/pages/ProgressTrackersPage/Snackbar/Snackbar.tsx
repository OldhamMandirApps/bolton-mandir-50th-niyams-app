import React from 'react';
import { useRecoilState } from 'recoil';
import snackbarAtom from './snackbarAtom';
import { Alert, AlertColor } from '@mui/lab';
import { Snackbar as MuiSnackbar } from '@mui/material';

function Snackbar(): JSX.Element {
  const [snackbarData, setSnackbarData] = useRecoilState(snackbarAtom);

  const handleClose = () => {
    setSnackbarData({ ...snackbarData, open: false });
  };

  return (
    <div data-testid='status-snackbar'>
      <MuiSnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbarData.open}
        autoHideDuration={10000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarData.status as AlertColor} data-testid='status-snackbar-text'>
          {snackbarData.message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
}

export default Snackbar;
