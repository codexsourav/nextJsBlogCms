import Router from "next/router";
import styles from "./compocss/adminnav.module.css";
import React from "react";
import NextNProgress from "nextjs-progressbar";
import Link from "next/link";
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
        height={5}
        showOnShallow={true}
      />

      <div className={styles.navbar}>
        <Link href="/admin">
          <h3>Admin Panel</h3>
        </Link>
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
