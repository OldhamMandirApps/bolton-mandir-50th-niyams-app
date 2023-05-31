import {
  collection,
  doc,
  increment,
  Firestore,
  getDocs,
  query,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  runTransaction,
  SnapshotOptions,
  where,
  serverTimestamp,
} from 'firebase/firestore';
import { NiyamData } from '../types';
import { Niyam } from '../config/niyams';
import { AgeGroupOptions } from '../pages/SubmitNiyamProgressPage/SubmitNiyamProgressForm/fields/AgeGroupSelect/AgeGroupSelect';

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
  {
    niyam,
    progress,
    ageGroup,
    fullName,
  }: { niyam: Niyam; progress: number; ageGroup: AgeGroupOptions; fullName: string },
): Promise<void> {
  const niyamDocRef = doc(db, 'niyams', niyam.id);
  try {
    await runTransaction(db, async (transaction) => {
      const niyamDoc = await transaction.get(niyamDocRef);
      if (!niyamDoc.exists()) {
        throw new Error('Document does not exist!');
      }
      const previousProgress = niyamDoc.data().progress;
      const newProgress = previousProgress + progress;
      transaction.update(niyamDocRef, {
        progress: increment(progress),
      });

      const auditCollection = collection(db, 'audit');
      const auditDocRef = doc(auditCollection);
      transaction.set(auditDocRef, {
        niyam: niyam.label,
        fullName: fullName,
        ageGroup: ageGroup,
        previousProgress: previousProgress,
        newProgress: newProgress,
        progressEntered: progress,
        timestamp: serverTimestamp(),
      });
    });
    console.log('Transaction successfully committed!');
  } catch (e) {
    console.log('Transaction failed: ', e);
  }
}

export { getNiyamQuery, getNiyamDocuments, updateNiyamProgress, getNiyamDocument };
