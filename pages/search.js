import React from "react";

import styles from "../siteconponent/blogcomponent/comStyles/search.module.css";
import Head from "next/head";
function Search() {
  return (
    <>
      <Head>
        <title>Codex Sourav | Search On Blog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
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

export default Search;
