const { Role, User } = require("../../database/db");
const { generate_jwt_token } = require("../../services/generate.JWT");
const { get_template, send_email } = require("../../services/verify.email");
const jwt = require("jsonwebtoken");

exports.new_user = async (req, res) => {
  let body = req.body;

  try {
    const role =
      (await Role.findOne({ where: { role: body.role } })) ||
      (await Role.create({ role: body.role }));

    const user = await User.create({
      username: body.username,
      email: body.email,
      password: body.password,
      roleid: role.id,
    });

    const token = jwt.sign({ user }, "secreta", { expiresIn: "5m" });
    const template = get_template(user.username, token);
    send_email(user.email, "Confirmacion de Email", template);

    res.status(201).json({
      ok: true,
      message:
        "Usuario registrado exitosamente! Por favor verifique su correo ❤",
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "sucedio un error al registar el usuario",
      error,
    });
  }
};
