import { useEffect, useState } from 'react';
import { useFirestore } from 'reactfire';
import { getNiyamDocuments } from '../../db/niyams';
import { NiyamData } from '../../types';

export interface NiyamDocument extends NiyamData {
  id: string;
}

function useNiyamDocuments() {
  const [documents, setDocuments] = useState<NiyamDocument[]>([]);
  const db = useFirestore();

  useEffect(() => {
    async function fetchNiyamDocuments() {
      const docs = await getNiyamDocuments(db);
      const niyamDocs: NiyamDocument[] = [];
      docs.forEach((doc) => {
        const data = doc.data();
        niyamDocs.push({
          id: doc.id,
          name: data.name,
          progress: data.progress,
          target: data.target,
        });
      });
      setDocuments(niyamDocs);
    }
    fetchNiyamDocuments();
  }, [db]);

  return documents;
}

export default useNiyamDocuments;
