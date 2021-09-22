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

      await fetch("http://localhost:4000/api/newUser", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        json: true,
      })
        .then((response) => response.json())
        .then((resp) => {
          if(!resp.ok){
            setError(resp.error || resp.message)

            setTimeout(() => {
              setError("")
            }, 4000);
          } else {
            setMessage(resp.message)
  
            setTimeout(() => {
              setMessage("")
            }, 4000);
          }
        })
        .catch((e) => console.log(e));
    }
  } else {
    setError("Favor, revise sus campos");

    setTimeout(() => {
      setError("")
    }, 4000);
  }
};

export const login = async (e, form, setError, getIsToken, history) => {
  e.preventDefault();

  if ((form.email.error && form.password.error) === "") {
    const data = new URLSearchParams();
    data.append("username", form.username.value);
    data.append("password", form.password.value);

    await fetch("http://localhost:4000/api/login", {
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
            setError("")
          }, 4000);
        }
        else {
          cookies.set("token", resp.token)
          getIsToken()
          history.push('/')
        }
      })
      .catch((e) => {
        return e;
      });
  } else {
    setError("Favor, revise sus campos");

     setTimeout(() => {
      setError("")
    }, 4000);
  }
};

export const googleSignIn = async (googleData, history, setError) => {
  const id_token = googleData.tokenObj.id_token
  const data = new URLSearchParams();
  data.append("idtoken", id_token)

  await fetch("http://localhost:4000/google", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        json: true,
      }).then(response => response.json())
      .then(resp => resp.ok ? history.push('/login') : setError("Ha ocurrido un error"))
      .catch(e => console.log(e))
}