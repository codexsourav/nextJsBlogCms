import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../siteconponent/blogcomponent/comStyles/about.module.css";
function About() {
  return (
    <>
      <Head>
        <title>Codex Souarv | About Me</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="robots" content="index,follow" />
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

      <div className="container">
        <div className={styles.about}>
          <div className={styles.me}>
            <Image src="/sourav.jpg" width={300} height={300} />
          </div>
          <div className={styles.content}>
            <h1 style={{ fontFamily: '"Signika", sans-serif' }}>
              Hi, Nice to meet you!
            </h1>
            <br />
            <p
              className={styles.post}
              style={{
                fontFamily: '"Libre Baskerville", serif',
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              I am a young boy with a passion for Web Devloper, I love creating
              Ui Backend Api, I strive to improve myself and am working toward
              creating own, unique style. I have Skill About Html ,Css,
              javaScript,php,node,react js,next js Etc.Show My Works On
              <a href="http://github.com/codexsourav"> Github </a>
              :)
            </p>
            <div className={styles.socail}>
              <ul>
                <li>
                  <a href="https://www.facebook.com/fbinsourav">
                    <Image
                      src="/icons/facebook_lite.png"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/codexsourav/">
                    <Image src="/icons/instander.png" width={40} height={40} />
                  </a>
                </li>
                <li>
                  <a href="https://mobile.twitter.com/Sourav57394940">
                    <Image src="/icons/twitter.png" width={40} height={40} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/codexsourav">
                    <Image src="/icons/github.png" width={40} height={40} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCENvANETSckCOAonuFMGYiw/">
                    <Image src="/icons/youtube.png" width={40} height={40} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
