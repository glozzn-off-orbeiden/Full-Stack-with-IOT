const express = require("express");
const Router = express.Router();
const controllerTemp = require("../controller/controllerTemp");

Router.get("/", controllerTemp.temps);

module.exports = Router;