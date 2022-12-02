import React from "react";
import styles from "../comStyles/comment.module.css";
function Commentbox({ data }) {
  return (
    <div className={styles.commentbox}>
      <p className={styles.useinfo}>{data.name}</p>
      <p className={styles.commentdate}>{data.maindate}</p>
      <p className={styles.contentcomment}>{data.content}</p>
    </div>
  );
}

export default Commentbox;
