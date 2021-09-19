const jwt = require("jsonwebtoken");

let verify_token = (req, res, next) => {
  let token = req.headers["token"];

  if (!token) {
    return res.status(401).json({
      ok: false,
      err: "Es necesario el Token de authenticacion",
    });
  }

  jwt.verify(token, "secreta", (err, decode) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token no valido",
        },
      });
    }

    req.user = decode.user;
    next();
  });
};

module.exports = {
  verify_token,
};
