const { User } = require("../../database/db");
const jwt = require("jsonwebtoken");

exports.confirm_email = async (req, res) => {
  let token = req.params.token;
  let user_data;

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

    user_data = decode.user;
  });

  const user = await User.findOne({ where: { email: user_data.email } });

  if (!user) {
    res.json({
      ok: false,
      message: "No se encontro un usuario con este email",
    });
  }

  User.update({ verified: true }, { where: { id: user.id } }).then(
    (user_update) => {
      if (!user_update) {
        res.json({
          ok: false,
          message: "No se encontro un usuario con este id",
        });
      }

      res.cookie("token", token).status(201).json({
        ok: true,
        message: "Confirmacion exitosamente!",
      });
    }
  );
};
