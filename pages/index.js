import React, { useState } from "react";

import Postbox from "../siteconponent/blogcomponent/Postbox";
import Head from "next/head";
import styles from "../siteconponent/blogcomponent/comStyles/home.module.css";
import Script from "next/script";

function Index(props) {
  let blogs = props.posts;
  const [load, setload] = useState(6);
  const loadmore = () => {
    setload((d) => d + 6);
  };

  return (
    <div>
      <Head>
        <title>Codex Sourav | Welcome To My Blog</title>
        <meta
          content="codexsourav is Mainly about Latest Trending Updates , Trending Topics , Local News, Gaming News , and many more that&amp;#039;s make you update"
          property="og:description"
        />
        <meta
          content="codexsourav is Mainly about Latest Trending Updates , Trending Topics , Local News, Gaming News , and many more that&amp;#039;s make you update"
          name="description"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta content={process.env.HOST} property="og:url" />
        <meta name="robots" content="index,follow" />
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2J3Z75K60V"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-2J3Z75K60V');
        `}
      </Script>
      <div className={styles.postcontent} style={{ marginTop: 120 }}>
        {blogs.end != true ? (
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

export async function getServerSideProps(context) {
  let options = {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  };

  const host = process.env.HOST;
  const data = await fetch(`${host}/api/posts`, options);
  const posts = await data.json();

  return {
    props: { posts },
  };
}

export default Index;
