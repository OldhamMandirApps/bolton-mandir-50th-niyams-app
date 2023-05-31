import { useFirestore } from 'reactfire';
import { Firestore } from 'firebase/firestore';
import { useAsyncCallback, UseAsyncReturn } from 'react-async-hook';
import { Niyam } from '../../config/niyams';
import { updateNiyamProgress } from '../../db/niyams';
import { AgeGroupOptions } from '../../pages/SubmitNiyamProgressPage/SubmitNiyamProgressForm/fields/AgeGroupSelect/AgeGroupSelect';

export type NiyamFormSubmission = {
  niyam: Niyam;
  progress: number;
  ageGroup: AgeGroupOptions;
  fullName: string;
  mandirName: string;
};

async function update(form: NiyamFormSubmission, db: Firestore) {
  const progress = form.niyam.timeBased ? form.progress / 60 : form.progress;
  console.log(`Updating niyam progress for ${form.niyam.id} by ${progress}`);
  await updateNiyamProgress(db, {
    niyam: form.niyam,
    progress,
    ageGroup: form.ageGroup,
    fullName: form.fullName,
    mandirName: form.mandirName,
  });
}

function useUpdateNiyamProgress(): UseAsyncReturn<void, [NiyamFormSubmission]> {
  const db = useFirestore();
  return useAsyncCallback((form) => update(form, db));
}

export default useUpdateNiyamProgress;
