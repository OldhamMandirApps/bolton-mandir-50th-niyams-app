import { LoadingButton } from '@mui/lab';

interface SubmitNiyamProgressSubmitButtonProps {
  ariaLabel?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  loading: boolean;
}

function SubmitNiyamProgressSubmitButton(props: SubmitNiyamProgressSubmitButtonProps): JSX.Element {
  return (
    <LoadingButton
      type='submit'
      data-testid='niyam-progress-submit-button'
      variant='contained'
      aria-label={props.ariaLabel ?? 'submit Naam Jap total'}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      loading={props.loading}
    >
      {props.label ?? 'Submit total'}
    </LoadingButton>
  );
}

export default SubmitNiyamProgressSubmitButton;
