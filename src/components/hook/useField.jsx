import { useState } from "react";

function UseField() {
  const [form, setForm] = useState({
    username: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    passwordConfirmation: {
      value: "",
      error: "",
    },
    role: "admin",
  });

  function handleInput(target, type, min = 5) {
    const { name, value } = target;

    if (type === "text") {
      if (!value) {
        setForm({
          ...form,
          [name]: {
            ...name,
            error: `Su ${target.getAttribute(
              "data-name"
            )} no puede quedar vacio`,
          },
        });
      } else if (!minLength(value, min)) {
        setForm({
          ...form,
          [name]: {
            ...name,
            error: `Su ${target.getAttribute(
              "data-name"
            )} debe tener como minimo ${min} caracteres`,
          },
        });
      } else if (!maxLength(value)) {
        setForm({
          ...form,
          [name]: {
            ...name,
            error: `Su ${name} debe tener como maximo 255 caracteres`,
          },
        });
      } else {
        setForm({
          ...form,
          [name]: {
            value: value,
            error: "",
          },
        });
      }
    } else if (type === "email") {
      if (!validateEmail(value)) {
        setForm({
          ...form,
          [name]: {
            value: value,
            error: "El formato de su correo no es valido",
          },
        });
      } else {
        setForm({
          ...form,
          [name]: {
            value: value,
            error: "",
          },
        });
      }
    }
  }

  function minLength(value, min) {
    if (value.length < min) return false;
    else return true;
  }

  function maxLength(value) {
    if (value.length > 255) return false;
    else return true;
  }

  function validateEmail(email) {
    if (
      !email ||
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        email
      )
    ) {
      return false;
    } else {
      return true;
    }
  }

  return {
    form,
    handleInput,
  };
}

export default UseField;
