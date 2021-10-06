import React from 'react';
import NiyamSelect from './fields/NiyamSelect';
import NiyamProgressInput from './fields/NiyamProgressInput';

function AddNiyamProgressForm(): JSX.Element {
  return (
    <div data-testid='add-niyam-progress-form'>
      <form>
        <NiyamSelect />
        <NiyamProgressInput />
      </form>
    </div>
  );
}

export default AddNiyamProgressForm;
