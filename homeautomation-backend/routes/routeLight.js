const express = require("express");
const Router = express.Router();
const controllerLight = require("../controllers/controllerLights");

Router.get("/", controllerLight.fetchlights);

Router.put('/',controllerLight.createLight);

Router.put('/:id', controllerLight.deleteLight);


module.exports = Router;

