import { useEffect, useMemo } from 'react';

export const useComponentOnScreen = refs => {
  const handleScroll = entries => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        if (item.target.querySelector('.title') !== null && item.target.querySelector('.content') !== null) {
          item.target.querySelector('.title').style.transform = 'translateZ(0)';
          item.target.querySelector('.content').style.transform = 'translateZ(0)';
          item.target.querySelector('.content').style.opacity = 1;
        }

        item.target.style.opacity = 1;
        item.target.style.transform = 'translateZ(0)';
      }
    });
  };

  const observer = useMemo(
    () =>
      new IntersectionObserver(handleScroll, {
        threshold: 0.1,
      }),
    []
  );

  useEffect(() => {
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer && observer.disconnect();
  }, [observer, refs]);
};
