import React from "react";

function Error({ error, cls, setError, link }) {
  return (
    <div className={"message-error " + cls}>
      <p className="error-paragraph">{error}</p>
      <span onClick={() => setError("")}>X</span>
      {link && (
        <a className="link-message" href={link} target="_blank" rel="noreferrer">
          Verificar
        </a>
      )}
    </div>
  );
}

export default Error;
