'use strict'

const routeDashBoard = require('../routes/routeDashboard');
const createError = require('http-errors');
const Status = require('../models/schemaStatus');
const Temp = require('../models/schemaTemp');

// const cursor = db.collection('inventory').find({
//     'instock.qty': { $lte: 20 }
//   });

async function fetchstatus(req, res, next) {

// console.log(req);

// const cursor = db.collection('inventory').find({
//     instock: { $elemMatch: { qty: 5, warehouse: 'A' } }
//   });
// const cursor = db.collection('inventory').find({
//     status: { $in: ['A', 'D'] }
//   });

    try {
        console.log('test');

        Status.Light.findOne ({
            'Status': {$in:'off'}

        }, function (err, response) {

            if (err) {
                console.log('i am an error', err);

                return next(createError(500, err.message))
            }

         if(response){
             console.log(response);

            res.send(response)
          }
        //  else if (Status !== 'on'){
        //      res.send('off')
        //  }
         })
    } catch (error) {
        () => res.send('this is our error mssg', error.message)
    }

}

module.exports = {
    status: fetchstatus
}