const app = require("./server");
const env = require("dotenv");
const { sequelize } = require('./database/db');
require('./database/asiciations')

env.config();

app.listen(4000, () => {
  console.log("Server andando tuany");

  sequelize.sync({ force: true }).then(() => {
    console.log("Nos hemos conectado a la base de datos");
  }).catch(error => {
    console.log('Se ha producido un error', error);
  })

});
