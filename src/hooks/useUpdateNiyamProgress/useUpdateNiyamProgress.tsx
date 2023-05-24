import { useFirestore } from 'reactfire';
import { Firestore } from 'firebase/firestore';
import { useAsyncCallback, UseAsyncReturn } from 'react-async-hook';
import { Niyam } from '../../config/niyams';
import { updateNiyamProgress } from '../../db/niyams';
import { AgeGroupOptions } from '../../pages/AddNiyamProgressPage/AddNiyamProgressForm/fields/AgeGroupSelect/AgeGroupSelect';

export type NiyamFormSubmission = {
  niyam: Niyam;
  progress: number;
  ageGroup: AgeGroupOptions;
};

async function update(form: NiyamFormSubmission, db: Firestore) {
  console.log(`Updating niyam progress for ${form.niyam.id} by ${form.progress}`);
  await updateNiyamProgress(db, form.niyam, form.progress, form.ageGroup);
}

function useUpdateNiyamProgress(): UseAsyncReturn<void, [NiyamFormSubmission]> {
  const db = useFirestore();
  return useAsyncCallback((form) => update(form, db));
}

export default useUpdateNiyamProgress;
