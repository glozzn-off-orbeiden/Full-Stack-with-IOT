import {Alert} from 'react-native'
import socket from 'socket.io-client'
const io = socket("https://6a70c78f.ngrok.io", { forceNew: true })

function alertHandler() {
    io.on("alert", function (data) {
        console.log(data.message);
        Alert.alert(
          data.title,
          data.message
        );
      });
}

export default alertHandler;