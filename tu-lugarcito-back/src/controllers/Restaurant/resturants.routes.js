const { Router } = require("express");
const routes = Router();

const { uploads } = require("../../middlewares/img.uploads");

const { create_restaurant } = require("./create.restaurant");

routes.post("/api/new_restaurant/:id",uploads.fields([{ name: 'gallery', maxCount: 10 }, { name: 'cover_page', maxCount: 1 }]) ,create_restaurant);

module.exports = routes;
