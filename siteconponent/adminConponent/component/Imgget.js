import React, { useState } from "react";
import styles from "./compocss/imgget.module.css";
import Upload from "./upload";
import { MdClose, MdOutlineImageSearch } from "react-icons/md";

function Imgget() {
  const [imgBox, setImgBox] = useState(false);
  return (
    <>
      {!imgBox ? (
        <span className={styles.showImgbox} onClick={() => setImgBox(true)}>
          <MdOutlineImageSearch />
        </span>
      ) : null}
      {imgBox ? (
        <>
          <span className={styles.close} onClick={() => setImgBox(false)}>
            <MdClose />
          </span>
          <div className={styles.imgget}>
            <div className={styles.mainbox}>
              <Upload />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Imgget;
