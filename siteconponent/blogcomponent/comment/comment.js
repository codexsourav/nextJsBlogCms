import React, { useEffect, useState } from "react";
import styles from "../comStyles/comment.module.css";
import Commentbox from "./commentbox";
import Commentinput from "./commentinput";

function Comment(props) {
  const id = props.postid;
  const [comment, setcomment] = useState([]);
  useEffect(() => {
    const options = { method: "GET" };

    fetch(`/api/comment/${id}`, options)
      .then((response) => response.json())
      .then((response) => setcomment(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.postinfobox}>
      {comment.length != 0 ? (
        <>
          <h3 className={styles.title}>Comments</h3>
          <div className={styles.commentlist}>
            {comment.map((e, i) => {
              return <Commentbox data={e} key={i} />;
            })}
          </div>
        </>
      ) : null}

      <Commentinput id={props.postid} />
    </div>
  );
}

export default Comment;
