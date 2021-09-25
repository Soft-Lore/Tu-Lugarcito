const { User } = require("../../database/db");
const { Token } = require("../../services/tokens");

exports.confirm_email = async (req, res) => {
  let token = req.params.token;

  let user_data = new Token(token).verify_token();

  const user = await User.findOne({ where: { email: user_data.email } });

  if (!user) {
    res.status(404).json({
      ok: false,
      message: "No se encontro un usuario con este email",
    });
  }
  const user_update = await User.update({ verified: true }, { where: { id: user.id } });
  
  !user_update
    ? res.status(404).json({ ok: false, message: "Usuario no encontrado" })
    : res.status(201).redirect("http://localhost:3000/login");
};
