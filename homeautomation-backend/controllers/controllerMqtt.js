const Status = require("../models/schemaStatus")
const Temp = require("../models/schemaTemp")


async function updateTemp(token, message) {

    let startSubstring = token.indexOf("/") + 1;


    let stopSubstring = token.indexOf("/", startSubstring)
    if (stopSubstring === -1) {
        stopSubstring = token.length - stopSubstring
    }

    let parameter = token.substring(startSubstring, stopSubstring);
    let searchParameter = `${parameter}`;
    console.log(searchParameter);


    try {

        await Temp.updateOne({}, { $push: { [searchParameter]: message } }, { upsert: true, new: true }).exec(function (err, doc) {
            if (err) {
                console.log(err);
                return
            }
            console.log(doc);

        })
    } catch (error) {
        console.log(error);

    }

};
async function statusUpdate(token, message, sockets) {

    let deviceCategory = token.substring(0, token.indexOf("/"))

    let startSubstring = token.indexOf("/") + 1;
    let stopSubstring = token.indexOf("/", startSubstring)
    if (stopSubstring === -1) {
        stopSubstring = token.length - stopSubstring
    }

    let parameter = token.substring(startSubstring, stopSubstring);
    let searchParameter = `${deviceCategory}.Token`;
    let updatedParameter = `${deviceCategory}.$.Status`;
    console.log(searchParameter);
    console.log(token);

    try {

        await Status.updateOne({ [searchParameter]: token }, { [updatedParameter]: message }, { new: true, upsert: true }).exec(function (err, doc) {
            if (err) {
                console.log(err);
                return
            }
            console.log(doc);
            if (doc.nModified === 1 && doc.n === 1) {
                sockets.emit("statusChange", {
                    Token: token,
                    Status: message
                })
            }
        })
    } catch (error) {
        console.log(error);

    }
}



module.exports = {
    updateTemp,
    statusUpdate
}