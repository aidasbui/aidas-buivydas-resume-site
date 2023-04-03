import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  const media = window.matchMedia(query);

  useEffect(() => {
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [media]);

  return matches;
};
export default useMediaQuery;
