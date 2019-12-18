'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaStatus = new Schema({
    Light: [
        {
            Token: {
                type: String,
                require: true,
                unique: true
            },

            Name: {
                type: String,
                required: true,
                unique: true
            },
            Status: {
                type: String,
                default: 'disconnect'
            }

        }
    ],
    Door: [

        {
            _id: { type: String },
            Name: {
                type: String,
                required: true
            },
            Status: {
                type: String,
                default: 'disconnect'
            },
        }
    ],
    Window: [
        {
            _id: { type: String },
            Name: {
                type: String,
                required: true
            },
            Status: {
                type: String,
                default: 'disconnect'
            }

        }
    ]
}/* , {_id: false } */);

module.exports = mongoose.model('Status', schemaStatus, "Status");











// const schemaStatus = new Schema({
//     Light: {
//                Light_Name: {
//                    type: String,
//                    required: true
//                },
//                Status: {
//                    type: String,
//                    default: 'off'
//                },
//             },
//     Door: {
//                 Door_Name: {
//                     type: String,
//                     required: true
//                 },
//                 Status: {
//                     type: String,
//                     default: 'closed'
//                 },
//             },
//     Window: {
//                 Window_Name: {
//                     type: String,
//                     required: true
//                 },
//                 Status: {
//                     type: String,
//                     default: 'closed'
//                 }

//             }
// });

// modules.export = mongoose.model('Status', schemaStatus, "Status");