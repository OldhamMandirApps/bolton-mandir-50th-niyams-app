import {
  collection,
  doc,
  Firestore,
  getDocs,
  query,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  SnapshotOptions,
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

function getNiyamDocument(db: Firestore, niyam: Niyam) {
  return doc(db, 'niyams', niyam.id).withConverter(niyamConverter);
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
  niyam: Niyam,
): Promise<void> {
  // const niyamDocRef = doc(db, 'niyams', documentId);
  // try {
  //   await runTransaction(db, async (transaction) => {
  //     const niyamDoc = await transaction.get(niyamDocRef);
  //     if (!niyamDoc.exists()) {
  //       throw new Error('Document does not exist!');
  //     }
  //     const previousProgress = niyamDoc.data().progress;
  //     const newProgress = previousProgress + progress;
  //     transaction.update(niyamDocRef, {
  //       progress: newProgress,
  //     });
  //     if (name) {
  //       const niyamSubmissionsCollection = collection(db, 'niyam-submissions');
  //       const bhaktachintamaniVachanamrutNiyamDocRef = doc(niyamSubmissionsCollection);
  //       transaction.set(bhaktachintamaniVachanamrutNiyamDocRef, {
  //         niyam: Niyam.BhaktachintamaniVachanamrut,
  //         name: name,
  //         count: progress,
  //       });
  //     }
  //     const auditCollection = collection(db, 'audit');
  //     const auditDocRef = doc(auditCollection);
  //     transaction.set(auditDocRef, {
  //       niyam: niyam,
  //       previousProgress: previousProgress,
  //       newProgress: newProgress,
  //       count: progress,
  //       timestamp: serverTimestamp(),
  //     });
  //   });
  //   console.log('Transaction successfully committed!');
  // } catch (e) {
  //   console.log('Transaction failed: ', e);
  // }
}

export { getNiyamQuery, getNiyamDocuments, updateNiyamProgress, getNiyamDocument };
