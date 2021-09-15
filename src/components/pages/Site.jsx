import React from "react";
import { useCarrousel } from "../hook/index";
import { NavBar } from "../organisms/index";
import { ImNext, ImBackward } from "react-icons/im";

const images = [
  "https://picsum.photos/1200/700?grayscale",
  "https://picsum.photos/seed/picsum/1200/700",
  "https://picsum.photos/id/237/1200/700",
  "https://picsum.photos/1200/700/?blur",
];

export default function Site() {
  const { index, toggleBack, toggleNext, updateIndex } = useCarrousel(
    images.length
  );

  return (
    <>
      <NavBar />
      <main className="site">
        <div className="site-section site-container__slider">
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
          <ImBackward
            className="site-section__next site-section__btn"
            onClick={() => toggleNext()}
          />
          <div
            className="site-slider"
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {images &&
              images.map((img, index) => (
                <img
                  key={index}
                  className="site-slider__item"
                  src={img}
                  alt=""
                />
              ))}
          </div>
          <ImNext
            className="site-section__back site-section__btn"
            onClick={() => toggleBack()}
          />
        </div>
        <div className="site-section site-section__two">
          <h3 className="site-section__title">VENTA</h3>
          <p className="site-section__price">$15000</p>
          <button className="site-section__button">Enviar Mensaje</button>
          <div className="site-section__description">
            <h4 className="site_subtitle site-description__title">Detalles</h4>
            <p className="site-description__content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis expedita natus rerum, sapiente dignissimos nobis
              adipisci recusandae ad ratione culpa minus voluptatibus quam,
              numquam vero deleniti magnam ullam error. Ab!
            </p>
          </div>
          <div className="site-section__otherDetails">
            <h4 className="site_subtitle section-otherDetails__title">
              Otros Detalles
            </h4>
            <div>
              <div>3 Cuartos</div>
              <div>3 duchas</div>
              <div>3 Garage</div>
            </div>
          </div>
          <div className="site-send__message">
            <textarea type="text" placeholder="Hola, ¿Aún esta disponible?" />
            <button className="header-content__button nav-collapse__button">
              Enviar
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
