import React from "react";
import Router, { useRouter } from "next/router";
import styles from "./compocss/sidebar.module.css";
import Link from "next/link";
function Sidebar() {
  const rout = useRouter().route;
  let url = rout.split("/")[2];

  const logout = () => {
    let url = "/api/logout";
    let options = {
      method: "GET",
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (json.auth == false) {
          Router.replace("/admin/login");
        }
      })
      .catch((err) => console.error("error:" + err));
  };
  return (
    <div className={styles.sidebar}>
      <ul className={styles.links}>
        <li>
          <Link
            className={url == undefined ? styles.active : null}
            href="/admin"
          >
            Dashbord
          </Link>
        </li>
        <li>
          <Link
            className={url == "addpost" ? styles.active : null}
            href="/admin/addpost"
          >
            Add Post
          </Link>
        </li>
        <li>
          <Link
            className={url == "upload" ? styles.active : null}
            href="/admin/upload"
          >
            Upload Images
          </Link>
        </li>
        <li>
          <Link
            className={url == "contact" ? styles.active : null}
            href="/admin/contact"
          >
            Contacts
          </Link>
        </li>

        <li>
          <a
            className={styles.logoutbtn}
            style={{ cursor: "pointer" }}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
