import { Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

interface SubmitNiyamProgressSubmitButtonProps {
  loading: boolean;
}

function SubmitNiyamProgressSubmitButton(props: SubmitNiyamProgressSubmitButtonProps): JSX.Element {
  return (
    <Grid item>
      <LoadingButton
        type='submit'
        data-testid='niyam-progress-submit-button'
        variant='contained'
        aria-label='submit niyam progress'
        loading={props.loading}
      >
        Submit
      </LoadingButton>
    </Grid>
  );
}

export default SubmitNiyamProgressSubmitButton;
