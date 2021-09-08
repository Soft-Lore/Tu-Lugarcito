import React from "react";
import HomeImage from "../../assets/img/home.svg";

export default function Header() {
  return (
    <header>
      <section className="header">
        <article className="header-content header-content__one">
          <h2 className="header-content__title">
            ENCUENTRA EL LUGAR CON EL CUAL SIEMPRE SOÑASTE
          </h2>
          <p className="header-content__paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="nav-collapse__button header-content__button">
            Ver más
          </button>
        </article>
        <article className="header-content header-content__two">
          <img
            src={HomeImage}
            alt="imagen-casa"
            className="header-content__image"
          />
        </article>
      </section>
    </header>
  );
}
