import { H1, PageContainer } from '../common/components';
import SubmitNiyamProgressForm from './SubmitNiyamProgressForm';

function SubmitNiyamProgressPage(): JSX.Element {
  return (
    <PageContainer data-testid='submit-niyam-progress-page'>
      <H1>Submit your niyam progress</H1>
      <SubmitNiyamProgressForm />
    </PageContainer>
  );
}

export default SubmitNiyamProgressPage;
