const { User } = require("../../database/db");
const jwt = require("jsonwebtoken");
const { get_template, send_email } = require("../../services/verify.email");

exports.confirm_email = async (req, res) => {
  let token = req.user;

  if (!token) {
    return res.status(401).json({
      ok: false,
      err: "Es necesario el Token de authenticacion",
    });
  }

  try {
    User.findOne({ where: { email: token.email } }).then((user) => {
      if (!user) {
        return res.status(404).json({
          ok: false,
          message: "Lo sentimos este usuario no existe",
        });
      }

      user
        .update({ verified: true }, { where: { id: user.id } })
        .then((user_verificate) => {
          const token = jwt.sign({ user }, "secreta", { expiresIn: "1m" });

          const template = get_template(user.username, token);

          send_email(user.email, "Confirmacion de Email", template);
        });

      res.status(200).json({
        ok: true,
        message: "Por favor verifique su correo",
      });
    });
  } catch (error) {
    return res.status(500).json({
      ok: true,
      message: "Sucedio un error al crear este usuario!",
      error,
    });
  }
};
