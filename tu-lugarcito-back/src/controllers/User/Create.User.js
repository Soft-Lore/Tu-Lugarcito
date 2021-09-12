const { Role, User } = require("../../database/db");

exports.new_user = async (req, res) => {
  let body = req.body;

  try {
    const user = await User.create({
      username: body.username,
      email: body.email,
      password: body.password,
    });
    const role = await Role.create({ role: body.role, userid: user.id });

    res.status(201).json({
        ok:true,
        message:'Usuario registrado exitosamente!',
        user,
        role
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "sucedio un error al registar el usuario",
      error
    });
  }
};
