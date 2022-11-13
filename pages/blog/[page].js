import Head from "next/head";
import React from "react";

import Navbar from "../../siteconponent/blogcomponent/Navbar";
import styles from "./blog.module.css";
function Page(props) {
  console.log(props);
  const blog = props.data;
  if (blog.error) {
    return (
      <>
        <Head>
          <title> 404 | Page Not Found</title>
        </Head>
        <div
          className="container"
          style={{
            textAlign: "center",
            marginTop: 300,
            fontSize: 25,
            fontFamily: '"Signika", sans-serif',
          }}
        >
          404 | Page Not Found
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.desc} />
        <meta name="keywords" content={blog.tags} />
        <meta name="author" content={blog.auther} />
        <meta http-equiv="content-language" content="en" />
        <meta name="og:title" content={blog.title} />
        <meta name="og:type" content={blog.cate} />
        <meta name="og:url" content={process.env.HOST + "/" + blog.uri} />
        <meta name="og:image" content={blog.poster} />
        <meta name="og:site_name" content="codex souarv" />
        <meta name="og:description" content={blog.desc} />
      </Head>
      <div className={styles.mainbox}>
        <div className={styles.postinfobox}>
          <div className={styles.tit}>
            <h1>{blog.title}</h1>
          </div>
          <div className={styles.user}>
            <div className="auther">Post By : {blog.auther}</div>
            <div className="date">{blog.maindate}</div>
          </div>
        </div>
        <div
          className={`${styles.postinfobox} ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const uri = context.query.page;

  let options = {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fby: "uri", sid: uri }),
  };
  const host = process.env.HOST;

  let url = host + "/api/blog";
  const get = await fetch(url, options);

  const data = await get.json();

  return { props: { data } };
}

export default Page;
