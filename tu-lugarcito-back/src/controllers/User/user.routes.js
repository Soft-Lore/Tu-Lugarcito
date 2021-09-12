const { Router } = require("express");
const routes = Router();

const { new_user } = require("../User/Create.User");

routes.post("/api/newUser",new_user);

module.exports = routes;
