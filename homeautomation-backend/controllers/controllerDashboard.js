'use strict'

const routeDashBoard = require('../routes/routeDashboard');
const createError = require('http-errors');
const Status = require('../models/schemaStatus');
const Temp = require('../models/schemaTemp');

async function fetchstatus(req, res, next) {

    // console.log(req);
    let data = {
        Lights: "",
        Doors: "",
        Windows: "",
        currentTemp: "23"
    };
    try {
        await Status.findOne({ "Light.Status": "on" },{_id:0, Light: {$elemMatch: {Status: "on"}}}
        , function (err, Status) {

                if (err) {
                    return next(createError(500, err.message))
                }
                if (Status !== null) {
                    console.log(Status);
                    data = { ...data, Lights: "on" }
                }
                else {
                    data = { ...data, Lights: "off" }
                    console.log(Status);

                }
            })
    } catch (error) {
        () => res.send(error.message)
    }
    try {
        await Status.findOne({ "Door.Status": "open" },/*  {_id:0, Door: {$elemMatch: {Status: "on"}}}
        , */ function (err, Status) {

                if (err) {
                    return next(createError(500, err.message))
                }

                if (Status !== null) {
                    console.log(Status.Doors);
                    data = { ...data, Doors: "open" }
                }
                else {
                    data = { ...data, Doors: "closed" }
                }
            })
    } catch (error) {
        () => res.send(error.message)
    }
    try {
        await Status.findOne({ "Window.Status": "open" },/*  {_id:0, Window: {$elemMatch: {Status: "on"}}}
        , */ function (err, Status) {

                if (err) {
                    return next(createError(500, err.message))
                }

                if (Status !== null) {
                    console.log(Status.Windows);
                    data = { ...data, Windows: "open" }
                }
                else {
                    data = { ...data, Windows: "closed" }
                }
            })
    } catch (error) {
        () => res.send(error.message)
    }
    res.send(data)
}

module.exports = {
    status: fetchstatus
}