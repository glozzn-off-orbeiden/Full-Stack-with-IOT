'use strict'

const routeDashBoard = require('../routes/routeDashboard');
const createError = require('http-errors');
const Temp = require('../models/schemaTemp');
//const mqtt = require('../middleware/mqtt');


async function fetchtemp(req, res, next) {

    try {
        await Temperature.find({}
        , function (err, Temp) {

                if (err) {
                    return next(createError(500, err.message))
                }

                res.send(Temp)
                }
            )
    } catch (error) {
        () => res.send(error.message)
    }
}

module.exports = {
    fetchtemp: fetchtemp
}