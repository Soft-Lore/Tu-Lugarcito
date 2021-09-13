const { Role, User } = require("../../database/db");
const { generate_jwt_token } = require("../../services/generate.JWT");

exports.new_user = async (req, res) => {
  let body = req.body;

  try {
    const role = await Role.create({ role: body.role });

    const user = await User.create({
      username: body.username,
      email: body.email,
      password: body.password,
      roleid: role.id,
    });

    const token = generate_jwt_token(user, role);

    res.status(201).json({
      ok: true,
      message: "Usuario registrado exitosamente!",
      user,
      role,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "sucedio un error al registar el usuario",
      error,
    });
  }
};
