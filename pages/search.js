import React, { useState } from "react";

import styles from "../siteconponent/blogcomponent/comStyles/search.module.css";
import Head from "next/head";
import Router from "next/router";
function Search() {
  const [err, seterr] = useState("");
  const [val, setval] = useState("");

  const searchItem = () => {
    if (val.length <= 2) {
      seterr("Enter More Search Info..");
      return false;
    } else {
      seterr("");
      Router.push("/blog/search/" + val);
    }
  };

  return (
    <>
      <Head>
        <title>Codex Sourav | Search On Blog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta content={process.env.HOST} property="og:url" />
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
        <meta
          name="google-site-verification"
          content="G4AC0d-ekH7xUQH31aNC-fa-M09tEuaY73D1zRr9ypU"
        />
      </Head>

      <br />
      <div className="container">
        <div className="search">
          <div className={styles.title}>
            <h3>Search your post</h3>
          </div>
          {err ? (
            <>
              <p className="errortxt">{err}</p> <br />
            </>
          ) : null}

          <input
            className="inp"
            value={val}
            onChange={(e) => setval(e.target.value)}
          />
          <br />
          <input
            type="submit"
            value="Search"
            onClick={() => {
              searchItem();
            }}
            className={styles.btn}
            placeholder="search Here..."
          />
        </div>
      </div>
    </>
  );
}

export default Search;
