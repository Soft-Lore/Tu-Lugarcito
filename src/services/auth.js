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
          if(!resp.ok) setError(resp.error || resp.message)
          
          resp.token && confirmateEmail(resp.token, setMessage, setError)
        })
        .catch((e) => console.log(e));
    }
  } else {
    setError("Favor, revise sus campos");
  }
};

const confirmateEmail = async (token, setMessage, setError) => {
  await fetch("http://localhost:4000/api/confirm_email",  {
    method: "PUT",
    headers: {token: token},
   }).then(response => response.json())
    .then(resp => resp.ok ? setMessage(resp.message) : setError(resp.error))
}

export const login = async (e, form, setError, updateToken) => {
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
        if (!resp.ok) setError(resp?.message || resp.err?.message);
        else console.log("inicio bien");
      })
      .catch((e) => {
        return e;
      });
  } else {
    return "Favor, revise sus campos";
  }
};

export const googleSignIn = async (googleData) => {
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
      })
}