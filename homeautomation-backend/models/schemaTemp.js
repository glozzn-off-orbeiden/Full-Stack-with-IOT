'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaTemp = new Schema({
    indoor:[[
        {
        temp:  {
            type: String
        },
        humidity: {
            type: String
        },
        timeStamp: Date
    }]],
    outdoor: [[
        {
        temp:  {
            type: String
        },
        humidity: {
            type: String
        },
        timeStamp: Date
    }]]
});
 

module.exports = mongoose.model('Temperature', schemaTemp, "Temp");

