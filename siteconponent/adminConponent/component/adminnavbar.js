import Router from "next/router";
import styles from "./compocss/adminnav.module.css";
import "./authsts";
import React from "react";
import NextNProgress from "nextjs-progressbar";
function Adminnavbar() {
  const logout = () => {
    let url = "/api/logout";
    let options = {
      method: "GET",
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.auth);
        if (json.auth == false) {
          Router.replace("/admin/login");
        }
      })
      .catch((err) => console.error("error:" + err));
  };
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <div className={styles.navbar}>
        <h3>Admin Panel</h3>
        <div>
          <p onClick={logout} className={styles.logoutbtn}>
            Logout
          </p>
        </div>
      </div>
    </>
  );
}

export default Adminnavbar;
