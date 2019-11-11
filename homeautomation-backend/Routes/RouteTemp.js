const express = require("express");
const Router = express.Router();
const tempController = require("../controller/tempController");

Router.get("/", tempController.temps);

module.exports = Router;
