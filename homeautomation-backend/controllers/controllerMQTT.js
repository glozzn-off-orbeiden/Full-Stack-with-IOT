const io = require('socket.io');

function doorbellON() {
    io.emit('alert', {title: "Doorbell",
message: "Some one is at the door!"})
console.log("Doorbell!");

}


module.exports= {
    doorbellON:doorbellON,
}