import { collection, query, QueryDocumentSnapshot, SnapshotOptions, where } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { NiyamData } from '../../types';

interface UseFirestoreData {
  status: 'loading' | 'error' | 'success';
  data: NiyamData[];
  error: Error | undefined;
}

const niyamConverter = {
  toFirestore: (data: NiyamData) => data,
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions) => snapshot.data(options) as NiyamData,
};

function useFirestoreData(niyam: string): UseFirestoreData {
  const firestore = useFirestore();
  const niyamsCollection = collection(firestore, 'niyams').withConverter(niyamConverter);
  const niyamQuery = query(niyamsCollection, where('name', '==', niyam));

  const { status, data, error } = useFirestoreCollectionData(niyamQuery);

  return { status, data, error };
}

export default useFirestoreData;
