const express = require("express");
const Router = express.Router();
const userController = require("../controller/userController");
Router.get("/", userController.fetchUser);

module.exports = Router;
