import useSWR from 'swr';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const useFetch = (address) => {
  const fetcher = (url) => axios.get(url).then((result) => result.data);
  const { data, error, mutate } = useSWR(address, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  }
}

export default useFetch;