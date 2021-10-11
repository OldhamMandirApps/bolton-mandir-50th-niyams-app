import { Button, Grid } from '@mui/material';

function AddNiyamProgressSubmitButton(): JSX.Element {
  return (
    <Grid item>
      <Button
        type='submit'
        data-testid='niyam-progress-submit-button'
        variant='contained'
        aria-label='submit niyam progress'
      >
        Submit your niyam progress
      </Button>
    </Grid>
  );
}

export default AddNiyamProgressSubmitButton;
