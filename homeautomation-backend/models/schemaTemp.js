'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const roomWeather = new Schema({
    temp:  {
        type: String

    },
    humidity: {
        type: String
    },
    timeStamp: Date
});

modules.export = mongoose.model('Temperature', schemaTemp, "Temp");

