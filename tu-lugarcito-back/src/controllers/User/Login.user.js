const { User, Role } = require("../../database/db");
const bcryptjs = require("bcryptjs");
const { generate_jwt_token } = require("../../services/generate.JWT");

exports.Login = async (req, res) => {
  const { username, password, role } = req.body;

  if (!(username && password)) {
    return res.status(400).json({
      ok: false,
      message: "El usuario y contraseña son requeridos",
    });
  } else {
    User.findOne({
      where: { username },
    })
      .then(async (user) => {
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

        const roles = await Role.findOne({ where: { userid: user.id } });

        const token = generate_jwt_token(user, roles);

        return res.cookie("token", token).status(201).json({
          ok: true,
          message: "Usuario autenticado correctamente",
          token,
        });
      })
      .catch((Error) => {
        res.status(500).json({
          ok: false,
          message: "Ha ocurrido un error inesperado",
          Error,
        });
      });
  }
};
