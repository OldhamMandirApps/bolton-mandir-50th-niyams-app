import { Button, Grid } from '@mui/material';

function AddNiyamProgressSubmitButton(): JSX.Element {
  return (
    <Grid item>
      <Button data-testid='niyam-progress-submit-button' variant='contained' aria-label='submit niyam progress'>
        Submit
      </Button>
    </Grid>
  );
}

export default AddNiyamProgressSubmitButton;
