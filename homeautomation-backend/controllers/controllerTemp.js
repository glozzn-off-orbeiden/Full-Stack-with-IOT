'use strict'

const routeDashBoard = require('../routes/routeDashboard');
const createError = require('http-errors');
const Temp = require('../models/schemaTemp');
//const mqtt = require('../middleware/mqtt');


async function fetchtemp(req, res, next) {

    // console.log(req);
    let data = {
        currentTemp: "23",
        indoor: "",
        outdoor: ""
    };

    try {
        await Temperature.findOne({ "Temperature": "" },{_id:0, Temperature: {$elemMatch: {indoor: ""}}}
        , function (err, Temperature) {

                if (err) {
                    return next(createError(500, err.message))
                }
                if (Status !== null) {
                    console.log(Temperature);
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
}

module.exports = {
    temps: fetchtemp
}