import React, { useState, useContext } from "react";
import { ControlInput } from "../moleculs/index";
import { NavBar } from "../organisms/index";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useHistory } from "react-router";
import image from "../../login.svg";
import { Footer } from "../organisms/index";
import { useField } from "../hook/index";
import { Error } from "../atoms/index";
import { login } from "../../services/auth";
import context from '../context/tokenContext'

export default function Login() {
  const { form, handleInput } = useField();
  const [error, setError] = useState("");
  const { getIsToken } = useContext(context)
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
        <form
          className="form-register"
          autoComplete="off"
          autoCorrect="off"
          onSubmit={(e) => login(e, form, setError, getIsToken)}
        >
          <h1 className="form-register__title">Iniciar Sesión</h1>
          {error && (
            <Error cls="error-secondary" setError={setError} error={error} />
          )}
          <ControlInput
            lbl="Nombre usuario"
            plc="Ingrese su nombre de usuario"
            cls="username"
            type="text"
            data-name="Nombre de usuario"
            name="username"
            onChange={(e) => handleInput(e.target, "text", 3)}
          >
            <FaUserAlt />
          </ControlInput>
          {form.username.error && <Error error={form.username.error} />}
          <ControlInput
            lbl="Contraseña"
            plc="Ingrese su contraseña"
            cls="password"
            type="password"
            data-name="contraseña"
            name="password"
            onChange={(e) => handleInput(e.target, "text", 8)}
          >
            <RiLockPasswordFill />
          </ControlInput>
          {form.password.error && <Error error={form.password.error} />}
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
          <a href="/" className="form-login__link">
            He olvidado mi contraseña
          </a>
        </form>
      </div>
      <Footer />
    </>
  );
}
