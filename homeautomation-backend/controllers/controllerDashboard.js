'use script'

const routeDashBoard = require('../routes/routeDashboard');
const createError = require('http-errors');
const Status = require('../models/schemaStatus');
const Temp = require('../models/schemaTemp');

async function fetchstatus(req, res, next) {

console.log(req);

    try {
        Status.findOne ({'Light': {$all:[]}}, function (err, Status) {
            if (err) {
                return next(createError(500, err.message))
            }

         if(Status){
             console.log(Status);

            res.send(Status)

        //  } else if (Status !== 'on'){
        //      res.send('off')
         }
        })
    } catch (error) {
        () => res.send(error.message)
    }

}

module.exports = {
    status: fetchstatus
}