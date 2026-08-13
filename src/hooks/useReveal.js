import { useEffect, useRef, useState } from 'react';

/**
 * Hook simples de "reveal on scroll" baseado em IntersectionObserver.
 * Retorna um ref para colocar no elemento e um boolean indicando se ele
 * já entrou na viewport (uma vez visível, permanece visível).
 */
const useReveal = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
};

export default useReveal;
