const { Router } = require("express");
const routes = Router();

const { uploads } = require("../../middlewares/img.uploads");

const { create_restaurant } = require("./create.restaurant");
const { all_restaurant, get_one_restaurant } = require("./get.restaurant");

routes.post("/api/new_restaurant/:id",uploads.fields([{ name: 'gallery', maxCount: 10 }, { name: 'cover_page', maxCount: 1 }]) ,create_restaurant);
routes.get("/api/all_restaurant", all_restaurant);
routes.get("/api/get_one_restaurant/:id", get_one_restaurant);

module.exports = routes;
