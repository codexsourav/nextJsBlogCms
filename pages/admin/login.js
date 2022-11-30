import Head from "next/head";
import React, { useState } from "react";
import styles from "../../siteconponent/adminConponent/styles/login.module.css";
import Router from "next/router";

function Login() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [serdata, setres] = useState();
  const [load, setload] = useState(false);

  const formHandel = () => {
    setload(true);
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
        setload(false);
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
        <link rel="shortcut icon" href="/favicon.ico" />
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
          <br />
          <button
            className={load ? "disbtn" : "clbtn"}
            onClick={formHandel}
            disabled={load}
          >
            {load ? "Chacking.." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const cook = context.req.cookies;

  let options = {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cook }),
  };
  const host = process.env.HOST;
  const data = await fetch(host + "/api/adminposts", options);
  const authg = await data.json();

  if (authg.auth != false) {
    return {
      redirect: {
        permanent: true,
        destination: "/admin",
      },
    };
  }
  return { props: { auth: true } };
}
export default Login;
