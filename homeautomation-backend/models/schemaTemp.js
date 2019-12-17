'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaTemp = new Schema({
    indoor: [
        {
            temp: {
                type: String
            },
            humidity: {
                type: String
            },
            timeStamp: {
                type: Date,
                default: Date.now()
            }
        }],
    outdoor: [
        {
            temp: {
                type: String
            },
            humidity: {
                type: String
            },
            timeStamp: {
                type: Date,
                default: Date.now()
            }
        }]
});


module.exports = mongoose.model('Temperature', schemaTemp, "Temp");

