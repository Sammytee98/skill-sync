import { useCallback, useRef } from "react";

const useCachedFetch = () => {
  const cacheRef = useRef(new Map());

  const fetchWithCache = useCallback(async (key, fetchFn) => {
    if (cacheRef.current.has(key)) {
      return cacheRef.current.get(key);
    }

    const result = await fetchFn();
    cacheRef.current.set(key, result);

    return result;
  }, []);

  const clearCache = useCallback(() => {
    cacheRef.current.clear();
  }, []);

  return { fetchWithCache, clearCache };
};

export default useCachedFetch;
