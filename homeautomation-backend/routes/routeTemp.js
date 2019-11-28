const express = require("express");
const Router = express.Router();
const controllerTemp = require("../controllers/controllerTemp");

Router.get("/", controllerTemp.fetchtemp);

module.exports = Router;
