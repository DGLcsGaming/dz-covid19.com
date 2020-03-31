const host =
  process.env.NODE_ENV === "production"
    ? "https://dz-covid19.com/api/"
    : "http://localhost:4000/api/";

console.log(process.env);
function post(path, body) {
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "sec-fetch-mode": "cors",
      "x-access-token": process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

function get(path) {
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "sec-fetch-mode": "cors",
      "x-access-token": process.env.REACT_APP_API_KEY
    },
    method: "GET",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

const http = {
  post: post,
  get: get
};

export default http;
