import React from "react";
import { ImNext, ImBackward } from "react-icons/im";
import { useCarrousel } from "../hook/index";

export default function Carrousel({ images, cls, ...rest }) {
  const { index, toggleBack, toggleNext, updateIndex } = useCarrousel(
    images.length
  );

  return (
    <div className={`site-section site-container__slider ${cls}`}>
      <div className="slider-items__span">
        {images &&
          images.map((img, i) => (
            <button
              onClick={(e) => updateIndex(i)}
              key={i}
              className={
                i === index
                  ? "slider-span__circle slider-span__active"
                  : "slider-span__circle"
              }
            ></button>
          ))}
      </div>
      <button
        className="site-section__next site-section__btn"
        onClick={() => toggleNext()}
      >
        <ImBackward />
      </button>
      <div
        className="site-slider"
        style={{
          transform: `translateX(${-index * 100}%)`,
          gridTemplateColumns: `repeat(${images.length}, 100%)`,
        }}
      >
        {images &&
          images.map((img, index) => (
            <img
              key={index}
              className="site-slider__item"
              src={img}
              {...rest}
              alt=""
            />
          ))}
      </div>
      <button
        className="site-section__back site-section__btn"
        onClick={() => toggleBack()}
      >
        <ImNext />
      </button>
    </div>
  );
}
