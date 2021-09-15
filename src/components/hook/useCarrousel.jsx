import { useState } from "react";

export default function useCarrousel(size) {
  const [index, setIndex] = useState(0);

  function toggleNext() {
    setIndex((prevIndex) => (prevIndex === 0 ? size - 1 : prevIndex - 1));
  }

  function toggleBack() {
    setIndex((prevIndex) => (prevIndex === size - 1 ? 0 : prevIndex + 1));
  }

  const updateIndex = (i) => {
    setIndex(() => i);
  };

  return {
    index,
    toggleNext,
    toggleBack,
    updateIndex,
  };
}
