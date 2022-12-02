import Link from "next/link";
import React from "react";
import styles from "./comStyles/tags.module.css";
function Tags({ tags }) {
  const maintags = tags.split(",");

  return (
    <div className={styles.tags}>
      <ul>
        <li className={styles.main}>Tags</li>
        {maintags.map((d, i) => {
          return (
            <li key={i} rel="tag">
              {d}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tags;
