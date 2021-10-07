const User = require("../../database/models/User");
const Role = require("../../database/models/Role");
const bcryptjs = require("bcryptjs");
const { Token } = require("../../services/tokens");

exports.Login = async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    return res.status(400).json({
      ok: false,
      message: "El usuario y contraseña son requeridos",
    });
  }
  const user = await User.findOne({
    where: { username },
    include: [
      {
        model: Role,
        attributes: ["role"],
      },
    ],
  });

  if (!user) {
    return res.status(404).json({
      isAuth: false,
      message: "Error de autenticación, Nombre de Usuario no encontrado",
    });
  }
  if (user.activate === false) {
    return res.status(400).json({
      isAuth: false,
      message: "Lo sentimos tu cuenta esta inactiva",
    });
  }
  if (!bcryptjs.compareSync(password, user.password)) {
    return res.status(400).json({
      ok: false,
      err: {
        message: "Contraseña incorrecta",
      },
    });
  }
  const token = new Token().generate_token(user);

  return res.status(201).json({
    ok: true,
    message: "Usuario autenticado correctamente",
    token,
    user,
  });
};
