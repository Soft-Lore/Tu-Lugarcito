import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-white.png";
import { BiHome } from "react-icons/bi";
import { IoMdRestaurant } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { logOut } from "../../services/auth";
import context from "../context/tokenContext";
import { useModal } from "../hook/index";
import { ModalComponent } from "../moleculs/index";
import { parseJwt } from '../functions/decryptToken'

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const { token } = useContext(context);
  const [active, toggleActive] = useModal();
  const jwt = token ? parseJwt(token) : undefined;
  const history = useHistory();

  return (
    <>
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
                to="/inmuebles"
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
          {token ? (
            <div className="nav-container__user">
              <div className="nav-user" onClick={() => setSubMenu(!subMenu)}>
                <img
                  className="nav-usericon"
                  alt="user"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                />
                <span className="nav-username">{jwt.user.username}</span>
              </div>
              <ul
                className={
                  subMenu
                    ? "nav-user__options nav-user__options-show"
                    : "nav-user__options"
                }
              >
                <li className="user-options__list">
                  <NavLink to="#">Perfil</NavLink>
                </li>
                <li className="user-options__list">
                  <NavLink to="/profile/site/fsdf">Mis Sitios</NavLink>
                </li>
                <li className="user-options__list">
                  <button onClick={toggleActive}>Cerrar Sesion</button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button
                className="nav-collapse__button"
                onClick={() => history.push("/login")}
              >
                Iniciar
              </button>
              <button
                className="nav-collapse__button"
                onClick={() => history.push("/register")}
              >
                Registrarse
              </button>
            </>
          )}
        </div>
        <div className="nav-menu" onClick={() => setMenu((m) => !m)}>
          <FiMenu />
        </div>
        <div
          className={menu ? "nav-menu__back" : ""}
          onClick={() => setMenu((m) => !m)}
        />
      </nav>
      <ModalComponent
        state={active}
        toggle={toggleActive}
        title={"¿Estas seguro que deseas Cerrar sesión?"}
        work={logOut}
      />
      <div onClick={() => setSubMenu(!subMenu)} className={subMenu ? "background-submenu" : null}></div>
    </>
  );
}
