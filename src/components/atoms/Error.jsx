import React from "react";
import { Link } from "react-router-dom";

function Error({ error, cls, setError, link }) {
  return (
    <div className={"message-error " + cls}>
      <p className="error-paragraph">{error}</p>
      <span onClick={() => setError("")}>X</span>
      {link && (
        <Link className="link-message" to={link}>
          Iniciar Sesión
        </Link>
      )}
    </div>
  );
}

export default Error;
