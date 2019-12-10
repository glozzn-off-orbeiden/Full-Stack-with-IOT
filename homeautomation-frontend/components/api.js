
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
//temperature fetching, 
async function fetchTemperature() {
  try {
    const res = await fetch(url + "/temp");
    const data = await res.json();
    console.log("promise?", data);

 
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
    return data;
  } catch (err) {
    () => {
      console.log(err);
    };
  }
}
export { fetchStatus, fetchLights, fetchTemperature, createLight };

/* async function fetchTemperature() {
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
fetchTemperature = async () => {
        try {
          const data = await fetchTemperature();
          console.log("promise?", data);
          this.setState({
            currentTemp: data.currentTemp
            /* lights: data.Lights 
          });
        } catch (err) {
          () => {
            console.log(err)
          }
        }
      componentDidMount() {
        this.fetchTemperature()
      };
    }
  }
 */
//console.log("hello");

 
