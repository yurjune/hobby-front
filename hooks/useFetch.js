import useSWR from 'swr';
import axios from 'axios';
import { backend } from '../components/Common/global';

axios.defaults.baseURL = backend;
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