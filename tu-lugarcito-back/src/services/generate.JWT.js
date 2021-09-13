const jwt = require("jsonwebtoken");

const generate_jwt_token = (user,role) => {
  return jwt.sign({ user,role }, "secreta", { expiresIn: "1d" });
};

module.exports = { generate_jwt_token };
