'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaTemp = new Schema({
    indoor:
        {
        name: {
            type: String,
            required: true
        },
        temp:  {
            type: String
        },
        humidity: {
            type: String
        },
        timeStamp: Date
    },
    outdoor:
        {
        name: {
            type: String,
            required: true
        },
        temp:  {
            type: String
        },
        humidity: {
            type: String
        },
        timeStamp: Date
    }
});

module.exports = mongoose.model('Temperature', schemaTemp, "Temp");

