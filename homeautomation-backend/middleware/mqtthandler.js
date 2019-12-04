const mqtt = require('mqtt');

class MqttHandler {
  constructor(io) {
    this.mqttClient = null;
    this.io =io
    /*   this.host = 'YOUR_HOST';
      this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
      this.password = 'YOUR_PASSWORD'; */
  }

  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(/* this.host, { username: this.username, password: this.password } */{ host: 'localhost', port: 1883 });

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe('mytopic', { qos: 0 });

    // When a message arrives, console.log it
    this.mqttClient.on('message', function (topic, message) {
      console.log(message.toString());
      // io.on("connection", function (socket) { 
        this.io.emit("alert", {
          title: "Doorbell",
          message: "Some one is at the Door!"
        });
        this.io.on("alert", function (socket) {
          console.log(socket, "test");

        })
      // })

    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    this.mqttClient.publish('mytopic', message);
  }
}

module.exports = MqttHandler;