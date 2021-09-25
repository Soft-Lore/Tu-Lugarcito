const jwt = require("jsonwebtoken");

class Token {
  constructor(token = null) {
    this.token_data = token;
  }

  verify_token = (req, res) => {
    let data;

    if (!this.token_data) {
      throw new Error("Se necesita Token");
    }

    jwt.verify(this.token_data, "secreta", (err, decode) => {
      if (err) {
        throw new Error("Token no valido");
      }
      data = decode.user;
    });
    return data;
  };

  generate_token = (user, expires = "1d") => {
    const token = jwt.sign({ user }, "secreta", { expiresIn: expires });
    return token;
  };
}

module.exports = { Token };
