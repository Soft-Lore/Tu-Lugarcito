const Role = require("../../database/models/Role");
const User = require("../../database/models/User");

exports.get_one_user = async (req, res) => {
  const id = req.params.id;

  try {
    const estate_result = await User.findOne({
      attributes: [
        "id",
        "username"
      ],

      include: [
        {
          model: Role,
          attributes: ["role"],
        }
      ],
    });

    return res.status(200).json({
      ok: true,
      id: estate_result.id,
      username: estate_result.username,
      role: estate_result.Role.role
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error,
    });
  }
};