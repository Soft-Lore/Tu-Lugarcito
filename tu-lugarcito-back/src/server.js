const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(require("./controllers/Rents/rents.routes"));
app.use(require("./controllers/User/user.routes"));
app.use(require('./controllers/Restaurant/resturants.routes'));

app.use(express.static(path.resolve(__dirname, "../public")));

module.exports = app;
