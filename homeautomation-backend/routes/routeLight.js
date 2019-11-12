const express = require("express");
const Router = express.Router();
const controllerLight = require("../controller/controllerLight");

Router.get("/", controllerLight.status);

module.exports = Router;
