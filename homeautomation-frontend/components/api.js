import { url } from "../config.js";
console.log(url);

async function fetchStatus() {
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  //console.log("hello");

  try {
    //console.log("hello2");

    let res = await fetch(url + "/status", option);
    let data = await res.json();
    //console.log("api call", data);

    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}

async function fetchLights() {
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  //console.log("hello");

  try {
    //console.log("hello2");

    let res = await fetch(url + "/lights", option);
    let data = await res.json();
    //console.log("api call", data);

    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}
//temperature fetching,
async function fetchTemperature() {
  try {
    const res = await fetch(url + "/temp");
    const data = await res.json();
    console.log("promise?", data);
    return data;
  } catch (err) {
    () => {
      console.log(err);
    };
  }
}
//go to AddDevice.js function
async function createLight(data) {
  let body = { ...data };

  const option = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    console.log("createLight");
    let res = await fetch(url + "/lights/", option);
    let data = await res.json();
    console.log("api call", data);
    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}
//newly created 1
async function createTemp(data) {
  let body = { ...data };
  const option = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    console.log("create Temp");
    let res = await fetch(url + "/temp/", option);
    let data = await res.json();
    console.log("api call", data);

    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}
//newly created 2
async function createDoor(data) {
  let body = { ...data };
  const option = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    console.log("create Door");
    let res = await fetch(url + "/Door/", option);
    let data = await res.json();
    console.log("api call", data);

    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}
//newly created 3
async function createDoorBell(data) {
  let body = { ...data };
  const option = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    console.log("create Doorbell");
    let res = await fetch(url + "/Doorbell/", option);
    let data = await res.json();
    console.log("api call", data);

    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}
//newly created 4
async function createWindow(data) {
  let body = { ...data };
  const option = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    console.log("create Window");
    let res = await fetch(url + "/Window/", option);
    let data = await res.json();
    console.log("api call", data);

    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}

//fetching data
async function fetchtemp(data) {
  let body = { ...data };
  const option = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    //console.log("hello2");
    let res = await fetch(url + "/temp/", option);
    let data = await res.json();
    console.log("api call", data);

    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}

export {
  fetchStatus,
  fetchLights,
  fetchTemperature,
  createLight,
  createDoor,
  createTemp,
  createDoorBell,
  createWindow,
  fetchtemp
};
