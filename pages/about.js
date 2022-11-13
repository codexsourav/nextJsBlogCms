import Head from "next/head";
import React from "react";

function About() {
  return (
    <>
      <Head>
        <title>Codex Souarv | About Me</title>
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

      <div className="container">
        <h1 style={{ fontFamily: '"Signika", sans-serif' }}>About Us</h1>
        <br />
        <p
          style={{
            fontFamily: '"Libre Baskerville", serif',
            lineHeight: 2,
            textAlign: "justify",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
          similique id voluptates aliquid iusto temporibus corrupti harum quas
          tempora, excepturi amet, optio aperiam maxime suscipit vero aut
          repellat numquam exercitationem?
        </p>
      </div>
    </>
  );
}

export default About;
