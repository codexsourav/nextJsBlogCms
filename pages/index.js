import React from "react";

import Postbox from "./component/Postbox";
import Head from "next/head";
import styles from "./component/comStyles/home.module.css";

function Index() {
  return (
    <div>
      <Head>
        <title>Codex Sourav | Welcome To My Blog</title>
      </Head>

      <div className={styles.postcontent} style={{ marginTop: 120 }}>
        <Postbox />
        <Postbox /> <Postbox />
      </div>
      <div className={styles.load}>
        <button className={styles.loadmore}>Load More</button>
      </div>
    </div>
  );
}

export default Index;
