const { Router } = require("express");
const routes = Router();
const { Create_rent } = require("./create.rent");
const { uploads } = require('../../middlewares/img.uploads');

routes.post("/api/create_business/:id", uploads.fields([{ name: 'gallery', maxCount: 10 }, { name: 'cover_page', maxCount: 1 }]), Create_rent)

module.exports = routes;
