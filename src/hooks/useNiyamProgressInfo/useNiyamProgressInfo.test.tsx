import { renderHook } from '@testing-library/react-hooks';
import useNiyamProgressInfo from './useNiyamProgressInfo';
import useFirestoreData from '../useFirestoreData';
import { Niyam } from '../../config/niyams';
import { NiyamBuilder } from '../../../test/testUtils';

jest.mock('../useFirestoreData');

describe('useNiyamProgressInfo', () => {
  const useFirestoreDataMock = useFirestoreData as jest.Mock;
  test('should return loading=true when loading data from firestore', () => {
    useFirestoreDataMock.mockImplementationOnce(() => {
      return {
        status: 'loading',
        data: null,
        error: false,
      };
    });

    const { result } = renderHook(() => useNiyamProgressInfo(Niyam.OradaNaPads));

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();
  });

  test('should return error when error from firestore', () => {
    const error = new Error('some error from Firestore');

    useFirestoreDataMock.mockImplementationOnce(() => {
      return {
        status: 'error',
        data: null,
        error: error,
      };
    });

    const { result } = renderHook(() => useNiyamProgressInfo(Niyam.OradaNaPads));

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe(error);
    expect(result.current.data).toBeNull();
  });

  test('should return error when no document retrieved from firestore', () => {
    const niyam = Niyam.ShantiPaath;
    const error = new Error(`There was no document found in the database for ${niyam}`);

    useFirestoreDataMock.mockImplementationOnce(() => {
      return {
        status: 'success',
        data: [],
        error: null,
      };
    });

    const { result } = renderHook(() => useNiyamProgressInfo(niyam));

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toStrictEqual(error);
    expect(result.current.data).toBeNull();
  });

  test('should return error when more than 1 document retrieved from firestore', () => {
    const niyam = Niyam.JanmangalNamavali;
    const error = new Error(`There were multiple documents found in the database for ${niyam}`);

    useFirestoreDataMock.mockImplementationOnce(() => {
      return {
        status: 'success',
        data: [NiyamBuilder(niyam, 1000, 10000), NiyamBuilder(niyam, 2500, 15000)],
        error: null,
      };
    });

    const { result } = renderHook(() => useNiyamProgressInfo(niyam));

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toStrictEqual(error);
    expect(result.current.data).toBeNull();
  });

  test('should return data when 1 document retrieved from firestore', () => {
    const niyam = Niyam.JanmangalNamavali;
    const data = NiyamBuilder(niyam, 1000, 10000);

    useFirestoreDataMock.mockImplementationOnce(() => {
      return {
        status: 'success',
        data: [data],
        error: null,
      };
    });

    const { result } = renderHook(() => useNiyamProgressInfo(niyam));

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBe(data);
  });
});
