'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaTemp = new Schema({
    indoor: {
               type: Array,
               default: []
            },
    outdoor: {
        type: Array,
        default: []
     }

});

modules.export = mongoose.model('Temperature', schemaTemp, "Temp");