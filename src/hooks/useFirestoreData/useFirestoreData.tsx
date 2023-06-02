import { ObservableStatus, useFirestore, useFirestoreDocData } from 'reactfire';
import { getNiyamDocument } from '../../db/niyams';
import { NiyamData } from '../../types';
import { Niyam } from '../../config/niyams';

function useFirestoreData(niyam: Niyam): ObservableStatus<NiyamData> {
  const firestore = useFirestore();
  const document = getNiyamDocument(firestore, niyam);

  return useFirestoreDocData(document);
}

export default useFirestoreData;
