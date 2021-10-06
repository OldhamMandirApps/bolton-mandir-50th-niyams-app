import React from 'react';
import NiyamSelect from './fields/NiyamSelect';
import NiyamProgressInput from './fields/NiyamProgressInput';
import AddNiyamProgressSubmitButton from './fields/AddNiyamProgressSubmitButton';

function AddNiyamProgressForm(): JSX.Element {
  return (
    <div data-testid='add-niyam-progress-form'>
      <form>
        <NiyamSelect />
        <NiyamProgressInput />
        <AddNiyamProgressSubmitButton />
      </form>
    </div>
  );
}

export default AddNiyamProgressForm;
