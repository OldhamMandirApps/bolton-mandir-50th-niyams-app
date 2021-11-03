import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { getNiyamQuery } from '../../db/niyams';
import { NiyamData } from '../../types';
import { Niyam } from '../../config/niyams';

interface UseFirestoreData {
  status: 'loading' | 'error' | 'success';
  data: NiyamData[];
  error: Error | undefined;
}

function useFirestoreData(niyam: Niyam): UseFirestoreData {
  const firestore = useFirestore();
  const niyamQuery = getNiyamQuery(firestore, niyam);

  return useFirestoreCollectionData(niyamQuery);
}

export default useFirestoreData;
