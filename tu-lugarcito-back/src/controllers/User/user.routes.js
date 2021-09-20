const { Router } = require("express");
const routes = Router();
/**Controllers */
const { new_user } = require("../User/Create.User");
const { Login } = require("../User/Login.user");
const { google } = require("../User/Google.user");
const { confirm_email } = require("../User/confirm.email");

/**Middlewares */
const {
  user_singup_validate,
  username_validate,
  message_Validate,
  email_validate,
  check_roles_existed,
} = require("../../middlewares/user.validate");

const { verify_token } = require("../../middlewares/verify.token");

routes.post(
  "/api/newUser",
  [
    user_singup_validate(),
    message_Validate,
    username_validate,
    email_validate,
    check_roles_existed,
  ],
  new_user
);

routes.post("/api/login", Login);

routes.post("/google", google);

routes.put("/api/confirm_email/:token", verify_token, confirm_email);

module.exports = routes;
