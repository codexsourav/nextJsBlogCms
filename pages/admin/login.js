import Head from "next/head";
import React, { useState } from "react";
import styles from "./styles/login.module.css";
import Router from "next/router";

function Login() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [serdata, setres] = useState();

  const formHandel = () => {
    let url = "/api/login";

    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uname, pass }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setres(json);
        if (json.login == true) {
          Router.replace("/admin");
        }
      })
      .catch((err) => console.error("error:" + err));
  };

  return (
    <div className="container">
      <Head>
        <title>Codex Sourav | Login</title>
      </Head>
      <div className={styles.loginbox}>
        <h1>Login Admin Panel</h1>
        <span className="errortxt">{serdata ? serdata.error : null}</span>
        <div className={styles.mainform}>
          <label>Username</label>
          <input
            type="text"
            className="inp"
            value={uname}
            onChange={(e) => {
              setUname(e.target.value);
            }}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            className="inp"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <br />
          
          <button className={styles.btn} onClick={formHandel}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
