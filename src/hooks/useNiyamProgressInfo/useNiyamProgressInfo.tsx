import useFirestoreData from '../useFirestoreData';
import { Niyam } from '../../config/niyams';
import { NiyamData, Nullable, Optional } from '../../types';

interface ProgressInfo {
  loading: boolean;
  error: Optional<Error>;
  data: Nullable<NiyamData>;
}

function useNiyamProgressInfo(niyam: Niyam): ProgressInfo {
  const { data, status, error: dbError } = useFirestoreData(niyam);

  switch (status) {
    case 'loading':
      return loading();
    case 'error':
      return error(dbError);
    case 'success':
      return success(data, niyam);
  }
}

const loading = (): ProgressInfo => {
  return response(true, null, null);
};

const error = (err: Optional<Error>): ProgressInfo => {
  return response(false, err, null);
};

const success = (data: NiyamData[], niyam: string): ProgressInfo => {
  if (data.length === 0) {
    return error(new Error(`There was no document found in the database for ${niyam}`));
  } else if (data.length > 1) {
    return error(new Error(`There were multiple documents found in the database for ${niyam}`));
  } else {
    return response(false, null, data[0]);
  }
};

const response = (loading: boolean, error: Optional<Error>, data: Nullable<NiyamData>): ProgressInfo => {
  return {
    loading,
    error,
    data,
  };
};

export default useNiyamProgressInfo;
