import { collection, Firestore, query, Query, QueryDocumentSnapshot, SnapshotOptions, where } from 'firebase/firestore';
import { NiyamData } from '../types';
import { Niyam } from '../config/niyams';

const niyamConverter = {
  toFirestore: (data: NiyamData) => data,
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions) => snapshot.data(options) as NiyamData,
};

function getNiyamQuery(db: Firestore, niyam: Niyam): Query<NiyamData> {
  const niyamsCollection = collection(db, 'niyams').withConverter(niyamConverter);
  return query(niyamsCollection, where('name', '==', niyam));
}

export { getNiyamQuery };
