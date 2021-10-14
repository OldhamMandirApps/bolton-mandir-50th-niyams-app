import { H1, PageContainer } from '../common/components';
import React from 'react';
import AddNiyamProgressForm from './AddNiyamProgressForm';

function AddNiyamProgressPage(): JSX.Element {
  return (
    <PageContainer data-testid='add-niyam-progress-page'>
      <H1>Add your niyam progress</H1>
      <AddNiyamProgressForm />
    </PageContainer>
  );
}

export default AddNiyamProgressPage;
