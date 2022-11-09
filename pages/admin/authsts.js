import Router from "next/router";

let url = "/api/auth";
let options = {
  method: "POST",
  headers: {
    Accept: "*/*",
  },
};

let data;
fetch(url, options)
  .then((res) => res.json())
  .then((json) => {
    if (json.auth != true) {
      Router.replace("/admin/login");
    }
  })
  .catch((err) => console.error("error:" + err));

export default data;
