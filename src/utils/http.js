const host = process.env.NODE_ENV === "production" ? "https://algeriacovid19.herokuapp.com/api/" : "http://localhost:4000/api/";

function post(path, body) {
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "sec-fetch-mode": "cors",
      "x-access-token": "eyJhbGciOiJIUzI1NiJ9.ZHotY292aWQxOS5jb20.FzdmsigNajPZXBSvAwRRcORxlz8kBW6vh_kRZ5N4NqU",
    },
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}

function get(path) {
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "sec-fetch-mode": "cors",
      "x-access-token": process.env.REACT_APP_API_KEY,
    },
    method: "GET",
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}

const http = {
  post: post,
  get: get,
};

export default http;
