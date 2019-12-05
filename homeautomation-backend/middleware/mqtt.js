const mqtt = require('mqtt');
const client = mqtt.connect({ host: 'localhost', port: 1883 });

module.exports.sockets = function (sockets) {

  client.on('connect', function () {
    // client.subscribe('presence', function (err) {
    //   if (!err) {
    //     client.publish('presence', 'Hello mqtt')
    //   }
    // })
    console.log(`Connected to`);

  })
  client.subscribe('sensors', function (err) {
    if (err) {
      console.log(err);

    }
  })

  client.subscribe('sensors/Doorbell/ON')

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    //client.end()

    switch (topic) {
      case "sensors/Doorbell/ON": sockets.emit("alert", {
        title: "Doorbell",
        message: "Someone is at the door!"
      });
      console.log("success");
      
        break;

      default:
        break;
    }


  })
}
