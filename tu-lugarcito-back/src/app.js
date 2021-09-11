const app = require("./server");

const env = require("dotenv");
// const { sequelize } = require("./models/index");
const { Role, User } = require("../src/database/db");

env.config();

app.listen(4000, () => {
  console.log("Server andando tuany");
});

app.post("/newUser", async (req, res) => {
  let body = req.body;

  try {
    User.create({
      username: body.username,
      email: body.email,
      password: body.password,
    })
      .then((user) => {
        Role.create({
          nameRole: body.nameRole,
          userid: user.id,
        }).then((result) => {
          res.json({
            ok: true,
            message: "Usuario creado",
            user,
            result
          });
        });
      })
      .catch((Err) => {
        res.json({
          ok: false,
          message: "ocurrio un error",
          Err
        });
      });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "ocurrio un  grave error",
    });
  }
});
