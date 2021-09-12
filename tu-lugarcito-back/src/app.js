const app = require("./server");
const env = require("dotenv");

env.config();

app.listen(4000, () => {
  console.log("Server andando tuany");
});
