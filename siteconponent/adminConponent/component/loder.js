import React from "react";
import styles from "../styles/loder.module.css";
import { FaSpinner } from "react-icons/fa";
function Loder() {
  return (
    <div className={styles.loder}>
      <div className="spin">
        <p className={styles.spiner}></p>
      </div>
    </div>
  );
}

export default Loder;
