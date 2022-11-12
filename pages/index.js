import React from "react";

import Postbox from "../siteconponent/blogcomponent/Postbox";
import Head from "next/head";
import styles from "../siteconponent/blogcomponent/comStyles/home.module.css";

function Index(props) {
  const blogs = props.posts;

  return (
    <div>
      <Head>
        <title>Codex Sourav | Welcome To My Blog</title>
      </Head>

      <div className={styles.postcontent} style={{ marginTop: 120 }}>
        {blogs.map((d) => {
          // console.log(d);
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
        })}
      </div>
      <div className={styles.load}>
        <button className={styles.loadmore}>Load More</button>
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
