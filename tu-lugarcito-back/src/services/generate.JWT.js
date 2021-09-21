const jwt = require("jsonwebtoken");

const generate_jwt_token = (user) => {
  const token = jwt.sign({ user }, "secreta", { expiresIn: "1d" });
  return token;
};

module.exports = { generate_jwt_token };
