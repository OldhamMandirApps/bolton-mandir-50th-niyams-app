import { Button } from '@mui/material';

function AddNiyamProgressSubmitButton(): JSX.Element {
  return (
    <Button data-testid='niyam-progress-submit-button' variant='contained' aria-label='submit niyam progress'>
      Submit
    </Button>
  );
}

export default AddNiyamProgressSubmitButton;
