import { useFirestore } from 'reactfire';
import { Firestore } from 'firebase/firestore';
import { useAsyncCallback, UseAsyncReturn } from 'react-async-hook';
import { Niyam } from '../../config/niyams';
import { updateNiyamProgress } from '../../db/niyams';

async function update(niyam: Niyam, progress: number, db: Firestore) {
  console.log(`Updating niyam progress for ${niyam.id} by ${progress}`);
  await updateNiyamProgress(db, niyam, progress);
}

function useUpdateNiyamProgress(): UseAsyncReturn<void, [niyam: Niyam, progress: number]> {
  const db = useFirestore();
  return useAsyncCallback((niyam: Niyam, progress: number) => update(niyam, progress, db));
}

export default useUpdateNiyamProgress;
