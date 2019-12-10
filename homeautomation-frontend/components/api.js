import { url } from '../config.js';

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

async function createLight(data) {

  let body = { ...data }


  const option = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    //console.log("hello2");

    let res = await fetch(url + "/lights/", option);
    let data = await res.json();
    console.log("api call", data);

    return data;
  } catch (error) {
    () => console.log("on showing error");
  }
}

export { fetchStatus, fetchLights, createLight };