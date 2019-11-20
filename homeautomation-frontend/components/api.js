import { NativeModulesProxy } from "@unimodules/core";

/* async function fetchTemp() {
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "json"
    }
  };
  let res= await fetch("localhost:3001/status/", option);
  let data = await res.json();
}
 */

function fetchStatus() {
  return {
    Light: "off",
    CurrentTemp: "23 C",
    Door: "open",
    Window: "open"
  };
}

module.exports = {
  fetchStatus: fetchStatus
};
