import React from "react";

import styles from "../siteconponent/blogcomponent/comStyles/search.module.css";
import Head from "next/head";
function Search() {
  return (
    <>
      <Head>
        <title>Codex Sourav | Search On Blog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta content={process.env.HOST} property="og:url" />
        <meta
          content="codexsourav is Mainly about Latest Trending Updates , Trending Topics , Local News, Gaming News , and many more that&amp;#039;s make you update"
          property="og:description"
        />
        <meta
          content="codexsourav is Mainly about Latest Trending Updates , Trending Topics , Local News, Gaming News , and many more that&amp;#039;s make you update"
          name="description"
        />
        <meta content="CodeX Sourav" property="og:site_name" />
        <meta content="website" property="og:type" />
        <meta content="CodeX Sourav" property="og:title" />
        <meta content="CodeX Sourav" property="og:site_name" />
        <meta content="summary" name="twitter:card" />
        <meta content="CodeX Sourav" name="twitter:title" />
        <meta content={process.env.HOST} name="twitter:domain" />
        <meta
          content="codexsourav is Mainly about Latest Trending Updates , Trending Topics , Local News, Gaming News , and many more that&amp;#039;s make you update"
          name="twitter:description"
        />
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
