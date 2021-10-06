const { Router } = require("express");
const routes = Router();

const { Create_rent } = require("./create.rent");
const { get_one_estate_user, all_estates } = require('./get.rents');

const { uploads } = require('../../middlewares/img.uploads');

const { verificaAdmin_Role, verify_token } = require("../../middlewares/verify.token")

routes.post("/api/create_business/:id", [verify_token, verificaAdmin_Role, uploads.fields([{ name: 'gallery', maxCount: 10 }, { name: 'cover_page', maxCount: 1 }])], Create_rent)

routes.get("/api/one_business/:id", get_one_estate_user);

routes.get("/api/all_business/", all_estates);
 

module.exports = routes;
