import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./comStyles/postbox.module.css";

function Postbox(props) {
  return (
    <div className={styles.mainbox}>
      <div className={styles.imagesec}>
        <Image
          src={props.poster}
          width="300"
          objectFit="contain"
          height="300"
          alt={props.cate + " image"}
          quality={30}
          priority
        />
      </div>
      <div className={styles.cate}>
        <p>{props.cate}</p>
      </div>
      <div className={styles.title}>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.desc}>
        <p>{props.desc}</p>
      </div>
      <div className={styles.more}>
        <Link href={`/blog/${props.uri}`}>READ MORE</Link>
      </div>
    </div>
  );
}

export default Postbox;
