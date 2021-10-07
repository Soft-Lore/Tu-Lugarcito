import Cookies from "universal-cookie";

const cookies = new Cookies();

export const register = async (e, form, setError, setMessage) => {
  e.preventDefault();

  if (
    (form.username.error &&
      form.email.error &&
      form.password.error &&
      form.passwordConfirmation.error) === ""
  ) {
    if (form.password.value !== form.passwordConfirmation.value) {
      setError("Las contraseñas no coinciden");

      setError("");
    } else {
      const data = new URLSearchParams();
      data.append("username", form.username.value);
      data.append("email", form.email.value);
      data.append("password", form.password.value);
      data.append("passwordConfirmation", form.passwordConfirmation.value);
      data.append("role", "cliente");

      await fetch("/api/newUser", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        json: true,
      })
        .then((response) => response.json())
        .then((resp) => {
          if (!resp.ok) {
            setError(resp.error || resp.message);

            setTimeout(() => {
              setError("");
            }, 4000);
          } else {
            setMessage(resp.message);

            setTimeout(() => {
              setMessage("");
            }, 4000);
          }
        })
        .catch((e) => console.log(e));
    }
  } else {
    setError("Favor, revise sus campos");

    setTimeout(() => {
      setError("");
    }, 4000);
  }
};

export const login = async (e, form, setError, getIsToken) => {
  e.preventDefault();

  if ((form.email.error && form.password.error) === "") {
    const data = new URLSearchParams();
    data.append("username", form.username.value);
    data.append("password", form.password.value);

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((resp) => {
        if (!resp.ok) {
          setError(resp?.message || resp.err?.message);

          setTimeout(() => {
            setError("");
          }, 4000);
        } else {
          localStorage.setItem("user", JSON.stringify(resp.user));
          cookies.set("token", resp.token);
          getIsToken();
          window.location.replace("/");
        }
      })
      .catch((e) => {
        return e;
      });
  } else {
    setError("Favor, revise sus campos");

    setTimeout(() => {
      setError("");
    }, 4000);
  }
};

export const googleSignIn = async (googleData, history, setError) => {
  const id_token = googleData.tokenObj.id_token;
  const data = new URLSearchParams();
  data.append("idtoken", id_token);

  await fetch("/google", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  })
    .then((response) => response.json())
    .then((resp) => {
      if (resp.ok) {
        localStorage.setItem("user", JSON.stringify(resp.usuario));
        cookies.set("token", resp.token);
        window.location.replace("/");
      } else {
        return "Ha ocurrrido un error al registrarse";
      }
    })
    .catch((e) => console.log(e));
};

export const logOut = async () => {
  cookies.remove("token");
  localStorage.removeItem("user");
  window.location.replace("/");
};
