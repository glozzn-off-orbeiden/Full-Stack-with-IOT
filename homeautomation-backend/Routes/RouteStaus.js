const express = require("express");
const Router = express.Router();
const statusController = require("../controller/statusController");

Router.get("/", statusController.status);

module.exports = Router;
