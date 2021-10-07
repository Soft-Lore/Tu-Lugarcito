import React from "react";
import { useHistory } from 'react-router'

export default function Header({title, keyword, content, btn, url, ...rest}) {
  const history = useHistory();

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
          <button onClick={() => history.push(url)} className="nav-collapse__button header-content__button">
            {btn}
          </button>
        </article>
      </section>
    </header>
  );
}
