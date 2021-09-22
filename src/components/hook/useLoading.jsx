import { useEffect, useState, useRef } from "react";

export default function useLazyLoading() {
  const [loading, setLoading] = useState(false)
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
      setLoading(true),
      2000
    );

    return () => {
      resetTimeout();
    };
  }, []);

   return {loading};
}
