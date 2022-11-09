import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./comStyles/postbox.module.css";

function Postbox() {
  return (
    <div className={styles.mainbox}>
      {/* <Link href="/"> */}
      <div className={styles.imagesec}>
        <Image
          src="/post.png"
          width="100"
          layout="responsive"
          objectFit="contain"
          height="100"
        />
      </div>
      <div className={styles.cate}>
        <p>HELGTH</p>
      </div>
      <div className={styles.title}>
        <h2>Are you looking for an easy guide on blog?</h2>
      </div>
      <div className={styles.desc}>
        <p>
          The step-by-step guide on this page will show you how to create a blog
          in 20 minutes with just the most basic computer skills.
        </p>
      </div>
      <div className={styles.more}>
        <Link href="/blog/post">READ MORE</Link>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default Postbox;
