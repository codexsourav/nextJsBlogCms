import Router from "next/router";

let url = "/api/authsts";
let options = {
  method: "POST",
  headers: {
    Accept: "*/*",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => {
    if (json.auth != true) {
      Router.replace("/admin/login");
    }
  })
  .catch((err) => console.error("error:" + err));
