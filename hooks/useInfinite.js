import useSWRInfinite from 'swr/infinite';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const useInfinite = (address) => {

  const getKey = (pageIndex, previousPageData) => {
    console.log('pageIndex:', pageIndex);
    if (previousPageData && !previousPageData.length) return null; // 끝에 도달
    return `${address}?page=${pageIndex}&limit=4`;
  }
  const fetcher = (url) => axios.get(url).then((result) => result.data);

  const { data, error, size, setSize } = useSWRInfinite(
    getKey, fetcher, { refreshInterval: 0 }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    size,
    setSize,
  }
}

export default useInfinite;