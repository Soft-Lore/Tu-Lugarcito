const { User, Role } = require("../../database/db");
const bcryptjs = require("bcryptjs");
const {generate_jwt_token } = require("../../services/generate.JWT");

const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const client = new OAuth2Client(
  "1014670675453-vna7io3paffh2lv386tek6u2b108l3fv.apps.googleusercontent.com"
);

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

let gooleVerify = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience:
      "1014670675453-vna7io3paffh2lv386tek6u2b108l3fv.apps.googleusercontent.com",
  });

  const payload = ticket.getPayload();

  return {
    username: payload.name,
    email: payload.email,
    verified: true,
  };
};

exports.google = async (req, res) => {
  
  let token = req.body.idtoken;

  let googleUser = await gooleVerify(token).catch((Err) => {
    return res.status(403).json({
      ok: false,
      error: Err,
    });
  });

  try {
    const user = await User.findOne({ where: { email: googleUser.email } });

    if (user) {
      
      if (user.verified === false) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "Debe de usar su autenticación normal",
          },
        });
      } else {
        let token = jwt.sign(
          {
            user: user,
          },
          "secreta"
        );

        return res.json({
          ok: true,
          usuario: user,
          token,
        });
      }
    } else {
      const role = await Role.create({ role: "cliente" });

      User.create({
        username: googleUser.username,
        email: googleUser.email,
        password: "#$moises",
        verified: true,
        roleid: role.id,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      err,
    });
  }
};
