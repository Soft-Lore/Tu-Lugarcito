import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../images/logo-white.png";
import { BiHome } from "react-icons/bi";
import { IoMdRestaurant } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { logOut } from "../../utils/services/auth";
import { useModal } from "../hook/index";
import { ModalComponent } from "../moleculs/index";
import context from "../context/tokenContext";
import { parseJwt } from "../functions/decryptToken";

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [active, toggleActive] = useModal();
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const location = useLocation();
  const { token } = useContext(context);
  const jwt = token ? parseJwt(token) : undefined;

  const toggleItemMenu = (rute) => {
    history.push(rute);
    setSubMenu(false);
    setMenu(false);
  };

  return (
    <>
      <nav className="nav">
        <img
          src={logo}
          alt="logo"
          className="nav-logo"
          onClick={() => history.push("/inmuebles")}
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
              <button
                className={
                  location.pathname === "/inmuebles"
                    ? !menu
                      ? "nav-collapse__list-item nav-active"
                      : "nav-collapse__list-item nav-collapse__list-item__show nav-active"
                    : !menu
                    ? "nav-collapse__list-item"
                    : "nav-collapse__list-item nav-collapse__list-item__show"
                }
                onClick={() => toggleItemMenu("/inmuebles")}
              >
                <BiHome />
                Inmuebles
              </button>
            </li>
            <li>
              <button
                className={
                  location.pathname === "/restaurants"
                    ? !menu
                      ? "nav-collapse__list-item nav-active"
                      : "nav-collapse__list-item nav-collapse__list-item__show nav-active"
                    : !menu
                    ? "nav-collapse__list-item"
                    : "nav-collapse__list-item nav-collapse__list-item__show"
                }
                onClick={() => toggleItemMenu("/restaurants")}
              >
                <IoMdRestaurant />
                Restaurantes
              </button>
            </li>

            <li>
              <button
                className={
                  location.pathname === "/about-me"
                    ? !menu
                      ? "nav-collapse__list-item nav-active"
                      : "nav-collapse__list-item nav-collapse__list-item__show nav-active"
                    : !menu
                    ? "nav-collapse__list-item"
                    : "nav-collapse__list-item nav-collapse__list-item__show"
                }
                onClick={() => toggleItemMenu("/about-me")}
              >
                <AiOutlineUsergroupAdd />
                Acerca de
              </button>
            </li>
          </ul>
          {user && token ? (
            <div className="nav-container__user">
              <div className="nav-user" onClick={() => setSubMenu(!subMenu)}>
                <img
                  className="nav-usericon"
                  alt="user"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                />
                <span className="nav-username">
                  {jwt?.user?.username || jwt?.name}
                </span>
              </div>
              <ul
                className={
                  subMenu
                    ? "nav-user__options nav-user__options-show"
                    : "nav-user__options"
                }
              >
                <li className="user-options__list">
                  <button onClick={() => toggleItemMenu("/profile")}>
                    Perfil
                  </button>
                </li>
                {user?.Role?.role === "admin" || user?.role === "admin" ? (
                  <li className="user-options__list">
                    <button
                      onClick={() => toggleItemMenu("/profile/site/fsdf")}
                    >
                      Mis Sitios
                    </button>
                  </li>
                ) : null}
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
      <div
        onClick={() => setSubMenu(!subMenu)}
        className={subMenu ? "background-submenu" : null}
      ></div>
    </>
  );
}
