import React from "react";
import { ControlInput } from "../moleculs/index";
import { NavBar } from "../organisms/index";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useHistory } from "react-router";
import image from "../../login.svg";
import { Footer } from "../organisms/index";

export default function Login() {
  const history = useHistory();
  return (
    <>
      <div className="wave">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <path
            d="M-78.15,-78.45 C-39.21,-31.08 24.54,68.58 492.37,221.53 L-12.13,163.31 L-69.69,141.61 Z"
            className="wave-svg__path"
          ></path>
        </svg>
      </div>
      <NavBar />
      <div className="form">
        <img src={image} alt="" className="form-image" />
        <form className="form-register" autoComplete="off" autoCorrect="off">
          <h1 className="form-register__title">Iniciar Sesión</h1>
          <ControlInput
            lbl="Email"
            plc="Ingrese su correo eléctronico"
            cls="email"
            type="email"
          >
            <MdEmail />
          </ControlInput>
          <ControlInput
            lbl="Contraseña"
            plc="Ingrese su contraseña"
            cls="password"
            type="password"
          >
            <RiLockPasswordFill />
          </ControlInput>
          <button type="submit" className="form-button form-button__primary">
            Enviar
          </button>
          <button
            type="button"
            className="form-button form-button__secondary"
            onClick={() => history.push("/register")}
          >
            Registrarse
          </button>
          <a href="/" className="form-login__link">He olvidado mi contraseña</a>
        </form>
      </div>
      <Footer />
    </>
  );
}
