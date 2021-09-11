const app = require("./server");
const { sequelize } = require("./models/index");
const env = require("dotenv");
// const { sequelize } = require("./models/index");

env.config();


app.listen(4000, () => {
  console.log("Server andando tuany");

  sequelize.authenticate().then(() => {
    console.log("Conexion con la base de datos exitosa");
  });
});
