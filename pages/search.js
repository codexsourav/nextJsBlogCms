import React from "react";

import styles from "./component/comStyles/search.module.css";
import Head from "next/head";
function search() {
  return (
    <>
      <Head>
        <title>Codex Sourav | Search On Blog</title>
      </Head>

      <br />
      <div className="container">
        <div className="search">
          <div className={styles.title}>
            <h3>Search your post</h3>
          </div>

          <form action="" method="post">
            <input className="inp" />
            <br />
            <input
              type="submit"
              value="Search"
              className={styles.btn}
              placeholder="search Here..."
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default search;
