const userController = require("../Controller/UserController");
const Auth = require("../Middleware/Auth");
const express = require("express");
const router = express.Router();
router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);
module.exports = router;
