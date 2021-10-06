import { H1, PageContainer } from '../common/components';
import React from 'react';
import AddNiyamProgressForm from './AddNiyamProgressForm';

function AddNiyamsPage(): JSX.Element {
  return (
    <PageContainer data-testid='add-niyams-page'>
      <H1>Add Niyams</H1>
      <AddNiyamProgressForm />
    </PageContainer>
  );
}

export default AddNiyamsPage;
