import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo3.png";
import { BiHome } from "react-icons/bi";
import { IoMdRestaurant } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useHistory } from 'react-router-dom'

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const history = useHistory()

  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="nav-logo" />
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
              to="/home"
            >
              <BiHome />
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
              <IoMdRestaurant />
              Restaurantes
            </NavLink>
          </li>

          <li>
            <NavLink
              className={
                !menu
                  ? "nav-collapse__list-item"
                  : "nav-collapse__list-item nav-collapse__list-item__show"
              }
              to="/about-me"
            >
              <AiOutlineUsergroupAdd />
              Acerca de
            </NavLink>
          </li>
        </ul>
        <button className="nav-collapse__button" onClick={() => history.push('/register')}>Registrarse</button>
      </div>
      <div className="nav-menu" onClick={() => setMenu((m) => !m)}>
        <FiMenu />
      </div>
      <div
        className={menu ? "nav-menu__back" : ""}
        onClick={() => setMenu((m) => !m)}
      />
    </nav>
  );
}
