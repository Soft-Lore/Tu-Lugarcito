import React, { useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const context = React.createContext();

//Gestion e inyeccion del token de usuario a la app
export function TokenProvider({ children }) {
  const getToken = cookies.get("token");
  const [token, setToken] = useState(getToken);

  function getIsToken () {
    setToken(cookies.get("token"))
  }
  
  return (
    <context.Provider value={{ token, setToken, getIsToken }}>
      {children}
    </context.Provider>
  );
}

export default context;