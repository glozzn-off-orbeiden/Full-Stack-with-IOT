'use strict'

const routeDashBoard = require('../routes/routeDashboard');
const createError = require('http-errors');
const Lights = require('../models/schemaStatus');
//const mqtt = require('../middleware/mqtt');


async function fetchlights(req, res, next) {
console.log('test');

    try {
        await Lights.find({}, {Light: true}
        , function (err, Lights) {

                if (err) {
                    return next(createError(500, err.message))
                }

                res.send(Lights)
                }
            )
    } catch (error) {
        () => res.send(error.message)
    }
}

module.exports = {
    fetchlights: fetchlights
}