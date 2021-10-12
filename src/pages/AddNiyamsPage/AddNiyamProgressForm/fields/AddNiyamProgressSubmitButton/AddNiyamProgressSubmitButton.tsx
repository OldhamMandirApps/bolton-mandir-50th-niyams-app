import { Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

interface AddNiyamProgressSubmitButtonProps {
  loading: boolean;
}

function AddNiyamProgressSubmitButton(props: AddNiyamProgressSubmitButtonProps): JSX.Element {
  return (
    <Grid item>
      <LoadingButton
        type='submit'
        data-testid='niyam-progress-submit-button'
        variant='contained'
        aria-label='submit niyam progress'
        loading={props.loading}
      >
        Submit your niyam progress
      </LoadingButton>
    </Grid>
  );
}

export default AddNiyamProgressSubmitButton;
