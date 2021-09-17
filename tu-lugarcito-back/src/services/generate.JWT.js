const jwt = require("jsonwebtoken");

const generate_jwt_token = (user) => {
  return jwt.sign({ user }, "secreta", { expiresIn: "1d" });
};

module.exports = { generate_jwt_token };
