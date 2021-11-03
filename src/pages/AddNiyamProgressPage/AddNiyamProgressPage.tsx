import { H1, PageContainer } from '../common/components';
import React from 'react';
import AddNiyamProgressForm from './AddNiyamProgressForm';
import Navbar from '../common/Navbar';

function AddNiyamProgressPage(): JSX.Element {
  return (
    <div>
      <Navbar showLanguageToggle={false} />
      <PageContainer data-testid='add-niyam-progress-page'>
        <H1>Add your niyam progress</H1>
        <AddNiyamProgressForm />
      </PageContainer>
    </div>
  );
}

export default AddNiyamProgressPage;
