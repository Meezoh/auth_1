import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<string>(Object);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error;
        }
        return res.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
      })
      .catch(err => {
        // auto catches network / connection error
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsLoading(false);
          setError(true);
        }
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
