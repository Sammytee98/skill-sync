import { useRef } from "react";

const useCachedFetch = () => {
  const cacheRef = useRef(new Map());

  const fetchWithCache = async (key, fetchFn) => {
    if (cacheRef.current.has(key)) {
      return cacheRef.current.get(key);
    }

    const result = await fetchFn();
    cacheRef.current.set(key, result);
    return result;
  };

  return fetchWithCache;
};

export default useCachedFetch;
