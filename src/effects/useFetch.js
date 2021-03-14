import { useEffect } from 'react';

export default function useFetch(callback, inputState, setIsfetching) {
  useEffect(async () => {
    function resolveResponse(res) {
      return res.json().then((json) => Promise.resolve(json));
    }
    const url = `https://rickandmortyapi.com/api/${inputState}`;
    const data = await fetch(url)
      .then((res) => resolveResponse(res))
      .catch((err) => Promise.reject(err));
    console.log(data);
    callback(data);
    setIsfetching(false);
  }, []);
}
