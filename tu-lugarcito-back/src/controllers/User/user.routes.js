const { Router } = require("express");
const routes = Router();
/**Controllers */
const { new_user } = require("../User/Create.User");
/**Middlewares */
const {
  user_singup_validate,
  username_validate,
  message_Validate,
  email_validate,
  check_roles_existed,
} = require("../../middlewares/user.validate");

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

module.exports = routes;
