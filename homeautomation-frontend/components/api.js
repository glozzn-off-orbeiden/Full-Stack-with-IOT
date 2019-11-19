function fetchTemp() {
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "json"
    }
  };
  fetch("localhost:3001/status/", option);
}
