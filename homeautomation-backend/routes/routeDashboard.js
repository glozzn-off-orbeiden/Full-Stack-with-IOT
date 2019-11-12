const express = require("express");
const Router = express.Router();
const controllerDashboard = require("../controller/controllerDashboard");

Router.get("/", controllerDashboard.status);

module.exports = Router;
