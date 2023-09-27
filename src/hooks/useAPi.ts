import { useState, useCallback } from 'react';

export const useApi = (): [Array<{[key: string]: string}> | null, boolean, (apiFunction: () => Promise<Array<{[key: string]: string}>> ) => Promise<void>,()=>void] => {
  const [data, setData] = useState<Array<{[key: string]: any}> | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (apiFunction: () => Promise<Array<{[key: string]: string}>>) => {
    setLoading(true);
    try {
      const response = await apiFunction();
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const clearData = useCallback(()=>{
    setData(null)
  },[])

  return [data, loading, fetchData,clearData];
};