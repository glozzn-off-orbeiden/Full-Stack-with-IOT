const mqtt = require('mqtt');
const client = mqtt.connect({ host: 'localhost', port: 1883 });
const { updateTemp, statusUpdate } = require("../controllers/controllerMqtt")

module.exports.sockets = function (sockets) {

  client.on('connect', function () {
    // client.subscribe('presence', function (err) {
    //   if (!err) {
    //     client.publish('presence', 'Hello mqtt')
    //   }
    // })
    console.log(`Connected to`);

  })
  // client.subscribe('sensors', function (err) {
  //   if (err) {
  //     console.log(err);

  //   }
  // })

  client.subscribe('Doorbell/#')
  client.subscribe('Window/#')
  client.subscribe('Door/#')
  client.subscribe('Temp/#')
  client.subscribe('Light/#')

  client.on('message', function (topic, recvMessage) {
    // message is Buffer
    console.log(recvMessage.toString())
    //client.end()

    const deviceCategory = topic.substring(0, topic.indexOf("/"))
    // console.log(deviceCategory);
    let message = recvMessage.toString();

    switch (deviceCategory) {

      case "Light":
      case "Window":
      case "Door": statusUpdate(topic, message)
        break;

      case "Temp": updateTemp(topic, JSON.parse(message));
        //  console.log("mqtt",topic, message);

        break;

      case "Doorbell": sockets.emit("alert", {
        title: "Doorbell",
        message: "Someone is at the door!"
      });
        break;

      default:
        break;
    }


  })
}
