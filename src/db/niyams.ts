import {
  collection,
  doc,
  Firestore,
  getDocs,
  increment,
  query,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  SnapshotOptions,
  updateDoc,
  where,
} from 'firebase/firestore';
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

async function getNiyamDocuments(db: Firestore): Promise<QuerySnapshot<NiyamData>> {
  const niyamsCollection = collection(db, 'niyams').withConverter(niyamConverter);

  return await getDocs(niyamsCollection);
}

async function updateNiyamProgress(db: Firestore, documentId: string, progress: number): Promise<void> {
  const docRef = doc(db, 'niyams', documentId);

  await updateDoc(docRef, {
    progress: increment(progress),
  });
}

export { getNiyamQuery, getNiyamDocuments, updateNiyamProgress };
