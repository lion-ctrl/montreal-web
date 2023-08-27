import { useState, useEffect } from 'react';

export const useVW = (): number => {
  const [viewportWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    setInnerWidth(window.innerWidth);

    const setSize = () => {
      setInnerWidth(window.innerWidth || 0);
    };

    window.addEventListener('resize', setSize, { passive: true });
    window.addEventListener('orientationchange', setSize, {
      passive: true,
    });
  }, []);

  return viewportWidth;
};
