import { useEffect, useState } from "react";

export default function useLazyLoading(item) {
  const [show, setShow] = useState(false);

   useEffect(() => {
    const options = {
      threshold: 0,
      rootMargin: "5px",
    };

    const showChapter = (entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(showChapter, options);

    observer.observe(item.current);
  }, [item]);

  return {show};
}
