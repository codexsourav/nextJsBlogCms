import React, { useEffect, useState } from "react";

import Postbox from "../../../siteconponent/blogcomponent/Postbox";
import Head from "next/head";
import styles from "../../../siteconponent/blogcomponent/comStyles/home.module.css";
import { useRouter } from "next/router";

function Find() {
  const router = useRouter();
  const { find } = router.query;

  const [blogs, setblogs] = useState([]);
  const [load, setload] = useState(6);

  const loadmore = () => {
    setload((d) => d + 6);
  };

  useEffect(() => {
    let url = "/api/search";

    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({ find: find }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setblogs(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [find]);

  return (
    <div>
      <Head>
        <title>Codex Sourav | Search {find}</title>
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

      <div className={styles.postcontent} style={{ marginTop: 120 }}>
        <div style={{ width: "100%", display: "block", textAlign: "center" }}>
          <h2>Search : {find}</h2>
        </div>
        {!blogs.error ? (
          blogs.slice(0, load).map((d) => {
            return (
              <Postbox
                key={d._id}
                title={d.title}
                desc={d.desc}
                cate={d.cate}
                uri={d.uri}
                poster={d.poster}
              />
            );
          })
        ) : (
          <b>No Posts Found</b>
        )}
      </div>
      <div className={styles.load}>
        {blogs.length >= load ? (
          <button
            className={styles.loadmore}
            onClick={() => {
              loadmore();
            }}
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Find;
