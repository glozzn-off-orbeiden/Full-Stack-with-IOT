const express = require("express");
const Router = express.Router();
const controllerLight = require("../controllers/controllerLights");

Router.get("/", controllerLight.fetchlights);

module.exports = Router;
