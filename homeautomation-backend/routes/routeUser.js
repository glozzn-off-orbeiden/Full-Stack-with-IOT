const express = require("express");
const Router = express.Router();
const controllerUser = require("../controller/controllerUser");
Router.get("/", userController.fetchUser);

module.exports = Router;
