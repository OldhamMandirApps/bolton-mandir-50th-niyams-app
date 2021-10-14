import { atom } from 'recoil';

export enum SnackbarStatus {
  empty = '',
  error = 'error',
  successful = 'success',
}

interface SnackbarAtomProps {
  status: SnackbarStatus;
  message: string;
  open: boolean;
}

export default atom<SnackbarAtomProps>({
  key: 'snackbarAtom',
  default: {
    status: SnackbarStatus.empty,
    message: '',
    open: false,
  },
});
