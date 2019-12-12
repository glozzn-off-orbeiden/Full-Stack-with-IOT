"use strict";

//const routeDashBoard = require('../routes/routeDashboard');
const createError = require("http-errors");
const Lights = require("../models/schemaStatus");
//const mqtt = require('../middleware/mqtt');

async function fetchlights(req, res, next) {
  console.log("test");

  try {
    await Lights.find({}, { Light: true }, function(err, Lights) {
      if (err) {
        return next(createError(500, err.message));
      }

      res.send(Lights);
    });
  } catch (error) {
    () => res.send(error.message);
  }
}

//go to AddDevice.js
async function createLight(req, res, next) {
  const newLight = req.body;

  if (!newLight.Token || !newLight.Name) {
    next(createError(400, "required missing fields: name and/or token!"));
  }

  let rawLight = {
    Name: newLight.Name.trim(),
    Token: newLight.Token.trim()
  };

  try {
    await Lights.updateOne({}, { $addToSet: { Light: rawLight } }, function(
      err,
      doc
    ) {
      if (err) {
        let msg = "Internal service error.";
        let status = 500;

        if (err.errmsg && err.errmsg.includes("E11000 duplicate key error")) {
          let msg = `error: Name ${newLight.Name} or Token: ${newLight.Token} already exists!`;
          let status = 409;
        }
        res.status(status);
        res.send(msg);
        return;
      }
      res.send(doc);
    });
  } catch (e) {
    console.log(e);
    next(createError(500, "Unexpected error!"));
  }
}

async function deleteLight(req, res, next) {
  const id = req.params.id;
  try {
    await Lights.updateOne({}, { $pull: { Light: { _id: id } } }, function(
      err,
      doc
    ) {
      if (err) {
        next(createError(400, `Resources ${id} not found!`));
        return;
      }
      res.send(doc);
    });
  } catch (e) {
    console.log(e);
    next(createError(500, "Unexpected error!"));
  }
}

module.exports = {
  fetchlights: fetchlights,
  createLight: createLight,
  deleteLight: deleteLight
};
