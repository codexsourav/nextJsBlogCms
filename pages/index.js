import React, { useState } from "react";

import Postbox from "../siteconponent/blogcomponent/Postbox";
import Head from "next/head";
import styles from "../siteconponent/blogcomponent/comStyles/home.module.css";

function Index(props) {
  let blogs = props.posts;

  console.log(blogs);
  const [load, setload] = useState(6);
  const loadmore = () => {
    setload((d) => d + 6);
  };

  return (
    <div>
      <Head>
        <title>Codex Sourav | Welcome To My Blog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

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
