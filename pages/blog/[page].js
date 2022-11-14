import Head from "next/head";

import Script from "next/script";
import React, { useState } from "react";

import Navbar from "../../siteconponent/blogcomponent/Navbar";
import Share from "../../siteconponent/blogcomponent/share";
import styles from "./blog.module.css";

function Page(props) {
  const blog = props.data;
  const host = props.host + "/blog/" + blog.uri;

  if (blog.error) {
    return (
      <>
        <Head>
          <title> 404 | Page Not Found</title>
          <link rel="shortcut icon" href="/favicon.ico" />
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
        <meta name="robots" content="index,follow" />
        <meta http-equiv="content-language" content="en" />
        <meta name="og:title" content={blog.title} />
        <meta name="og:type" content={blog.cate} />
        <meta name="og:url" content={process.env.HOST + "/" + blog.uri} />
        <meta name="og:image" content={blog.poster} />
        <meta name="og:site_name" content="codex souarv" />
        <meta name="og:description" content={blog.desc} />
        <link rel="shortcut icon" href="/favicon.ico" />
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
        <div className={`${styles.postinfobox}`}>
          <div className={`${styles.sharezone}`}>
            <Share title={blog.title} poster={blog.poster} host={host} />
          </div>
        </div>
      </div>
      <br />
      <br />
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

  return { props: { data, host } };
}

export default Page;
