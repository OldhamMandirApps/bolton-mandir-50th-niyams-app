import useNiyamDocuments from '../useNiyamDocuments';
import { useAsyncCallback, UseAsyncReturn } from 'react-async-hook';
import { Niyam } from '../../config/niyams';
import { NiyamDocument } from '../useNiyamDocuments/useNiyamDocuments';
import { updateNiyamProgress } from '../../db/niyams';
import { useFirestore } from 'reactfire';
import { Firestore } from 'firebase/firestore';

function getDocIdForNiyam(documents: NiyamDocument[], niyam: Niyam): string | null {
  const document = documents.find((doc) => doc.name === niyam);

  if (document) {
    return document.id;
  } else {
    return null;
  }
}

async function update(niyam: Niyam, name: string | null, progress: number, db: Firestore, documents: NiyamDocument[]) {
  const docId = getDocIdForNiyam(documents, niyam);

  if (docId) {
    console.log(`Updating niyam progress for ${niyam} by ${progress}`);
    await updateNiyamProgress(db, docId, name, progress, niyam);
  } else {
    throw new Error('No document found for niyam: ' + niyam);
  }
}

function useUpdateNiyamProgress(): UseAsyncReturn<void, [niyam: Niyam, name: string | null, progress: number]> {
  const db = useFirestore();
  const documents = useNiyamDocuments();

  return useAsyncCallback((niyam: Niyam, name: string | null, progress: number) =>
    update(niyam, name, progress, db, documents),
  );
}

export default useUpdateNiyamProgress;
