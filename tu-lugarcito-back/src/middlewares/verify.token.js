const { Token } = require("../services/tokens");
const Role = require('../database/models/Role');

const verify_token = (req, res, next) => {
  let token = req.headers["token"];

  if (!token) {
    return res.json({
      ok: false,
      err: {
        message: "El Token es necesario",
      },
    });
  }

  const data = new Token(token).verify_token();
  req.user = data;
  next();
};

const verificaAdmin_Role = async (req, res, next) => {
  let user = req.user;

  const roles = await Role.findOne({ where: { id: user.RoleId } });

  if (roles.role === 'admin') {
    next();
  } else {
    return res.json({
      ok: false,
      err: {
        message: "Este usuario no es administrador",
      },
    });
  }

}

module.exports = {
  verify_token,
  verificaAdmin_Role
};
