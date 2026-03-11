import { useEffect } from 'react';

export const usePreloadImages = (urls: string[]) => {
  useEffect(() => {
    urls.forEach(url => {
      if (url) {
        const img = new Image();
        img.src = url;
      }
    });
  }, [urls]);
};
