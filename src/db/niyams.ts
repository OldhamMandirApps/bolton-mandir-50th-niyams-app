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
  where,
  writeBatch,
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

async function updateNiyamProgress(
  db: Firestore,
  documentId: string,
  name: string | null,
  progress: number,
): Promise<void> {
  const batch = writeBatch(db);
  const niyamDocRef = doc(db, 'niyams', documentId);

  batch.update(niyamDocRef, {
    progress: increment(progress),
  });

  if (name) {
    const niyamSubmissionsCollection = collection(db, 'niyam-submissions');
    const bhaktachintamaniVachanamrutNiyamDocRef = doc(niyamSubmissionsCollection);
    batch.set(bhaktachintamaniVachanamrutNiyamDocRef, {
      niyam: Niyam.BhaktachintamaniVachanamrut,
      name: name,
      count: progress,
    });
  }

  await batch.commit();
}

export { getNiyamQuery, getNiyamDocuments, updateNiyamProgress };
