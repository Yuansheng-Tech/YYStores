// import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

export interface IGoods {}

export function useGoods(options) {
  // const { data, error } = useSWR('/goods', (url) => fetcher(url, options));
  let data = {}, error = false;
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useGood(id) {
  // const { data, error } = useSWR(`/goods/${id}`, fetcher);
  let data = {}, error = false;
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
