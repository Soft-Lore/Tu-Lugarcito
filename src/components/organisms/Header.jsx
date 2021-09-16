import React from "react";

export default function Header({title, keyword, content, ...rest}) {
  return (
    <header>
      <section className="header" {...rest}>
        <article className="header-content header-content__one">
          <h2 className="header-content__title">
            {title} <span> {keyword} </span>
          </h2>
          <p className="header-content__paragraph">
           {content}
          </p>
          <button className="nav-collapse__button header-content__button">
            Ver más
          </button>
        </article>
      </section>
    </header>
  );
}
