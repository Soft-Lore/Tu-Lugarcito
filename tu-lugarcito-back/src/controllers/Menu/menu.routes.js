const { Router } = require("express");
const routes = Router();

const { uploads } = require("../../middlewares/img.uploads");

const { create_menu } = require("./create.menu");

routes.post("/api/create_menu/:id", uploads.fields([{ name: 'cover_page', maxCount: 1 }]), create_menu);

module.exports = routes;
