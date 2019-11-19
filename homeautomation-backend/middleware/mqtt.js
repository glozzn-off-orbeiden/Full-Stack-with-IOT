var mqtt = require('mqtt')
var client  = mqtt.connect({host: 'localhost', port: 1883})

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
  } )
   
  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    //client.end()
  })