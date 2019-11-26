'use strict'

const routeDashBoard = require('../routes/routeDashboard');
const createError = require('http-errors');
const Temp = require('../models/schemaTemp');
//const mqtt = require('../middleware/mqtt');


async function fetchtemp(req, res, next) {

    // console.log(req);
    let data = {
        currentTemp: "23"
    };

try {
    await Status.findOne({ "Temperature": "" },{_id:0, Light: {$elemMatch: {Status: "on"}}}
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