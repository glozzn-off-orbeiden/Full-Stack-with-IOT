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
    Temp: "23 C",
    Door: "open",
    Window: "closed"
  };
}

module.exports = {
  fetchStatus: fetchStatus
};
