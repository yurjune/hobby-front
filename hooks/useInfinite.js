import useSWRInfinite from 'swr/infinite';
import axios from 'axios';
import { backend } from '../components/Common/global';

axios.defaults.baseURL = backend;
axios.defaults.withCredentials = true;

export const limit = 4;

const useInfinite = (address, lastId, userId, tag) => {

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // 끝에 도달
    return `${address}?page=${pageIndex}&limit=${limit}&lastId=${lastId}&userId=${userId}&tag=${encodeURIComponent(tag)}`;
  }
  const fetcher = (url) => axios.get(url).then((result) => result.data);

  const { data, error, size, setSize, mutate } = useSWRInfinite(
    getKey, fetcher, { refreshInterval: 0, initialSize: 2 }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    size,
    setSize,
    mutate,
  }
}

export default useInfinite;