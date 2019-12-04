import { NativeModulesProxy } from "@unimodules/core";

export default async function fetchStatus() {
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  //console.log("hello");

  try {
    //console.log("hello2");

    let res = await fetch("https://6a70c78f.ngrok.io/status", option);
    let data = await res.json();
    //console.log("api call", data);

    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}

/* function fetchStatus() {
  return {
    Light: "off",
    CurrentTemp: "23 C",
    Door: "open",
    Window: "open"
  };
} */

// module.exports = {
//   fetchStatus: fetchStatus
// };
