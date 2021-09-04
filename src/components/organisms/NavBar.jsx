import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="nav">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/986px-Naruto_logo.svg.png"
        alt="logo"
        className="nav-logo"
      />
      <div
        className={!menu ? "nav-collapse" : "nav-collapse nav-collapse__show"}
      >
        <ul
          className={
            !menu
              ? "nav-collapse__list"
              : "nav-collapse__list nav-collapse__list-show"
          }
        >
          <li>
            <NavLink
              className={
                !menu
                  ? "nav-collapse__list-item"
                  : "nav-collapse__list-item nav-collapse__list-item__show"
              }
              to="/about"
            >
              Acerca de
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                !menu
                  ? "nav-collapse__list-item"
                  : "nav-collapse__list-item nav-collapse__list-item__show"
              }
              to="/home"
            >
              Inmuebles
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                !menu
                  ? "nav-collapse__list-item"
                  : "nav-collapse__list-item nav-collapse__list-item__show"
              }
              to="/restaurants"
            >
              Restaurantes
            </NavLink>
          </li>
        </ul>
        <button className="nav-collapse__button">Registrarse</button>
      </div>
      <div className="nav-menu" onClick={() => setMenu((m) => !m)} />
      <div
        className={menu ? "nav-menu__back" : ""}
        onClick={() => setMenu((m) => !m)}
      />
    </nav>
  );
}
