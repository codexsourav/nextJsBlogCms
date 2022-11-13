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
          width="100"
          layout="responsive"
          objectFit="contain"
          height="100"
          alt={props.cate + " image"}
          loading="lazy"
        />
      </div>
      <div className={styles.cate}>
        <p>{props.cate}</p>
      </div>
      <div className={styles.title}>
        <h2>{props.title}</h2>
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