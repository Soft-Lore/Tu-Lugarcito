const { Token } = require("../services/tokens");

const verify_token = (req, res, next) => {
  let token = req.headers["token"];
  const data = new Token(token).verify_token();
  req.user = data;
  next();
};

module.exports = {
  verify_token,
};
