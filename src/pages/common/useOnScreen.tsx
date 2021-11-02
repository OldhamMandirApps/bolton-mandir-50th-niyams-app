import { RefObject, useEffect, useMemo, useState } from 'react';

export function useOnScreen<T extends Element | undefined>(ref: RefObject<T>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)), []);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
}
