import React, { useState } from "react";
import Swal from "sweetalert2";
import styles from "../comStyles/comment.module.css";
function Commentinput(props) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [content, setcontent] = useState("");
  const [url, seturl] = useState("");
  const [error, setError] = useState([]);
  const [load, setLaod] = useState(false);
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function isURL(str) {
    let regEx =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
    return regEx.test(str);
  }

  const AddComment = () => {
    setError([]);
    if (content.length < 5) {
      setError({ content: "Comment Must Be Min 5 Characters" });
      return false;
    }
    if (name.length == 0) {
      setError({ name: "Please Enter Your Name" });
      return false;
    }
    if (email.length == 0) {
      setError({ email: "Please Enter Your Email ID" });
      return false;
    }
    if (!validateEmail(email)) {
      setError({ email: "Please Enter A Valid Email ID" });
      return false;
    }

    if (url.length != 0) {
      if (!isURL(url)) {
        setError({ url: "Please Enter A Valid Url" });
        return false;
      }
    }

    // call api
    setLaod(true);
    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, content, url }),
    };

    fetch(`/api/comment/${props.id}`, options)
      .then((response) => response.json())
      .then((response) => {
        setLaod(false);
        if (response.add == true) {
          Swal.fire("Thank You!", "Your Comment Is Under Review!", "success");
          setName("");
          setcontent("");
          setemail("");
          seturl("");
        } else {
          Swal.fire(
            "Something Went Wrong",
            "Your Comment Not Added ! Please Contact Admin",
            "error"
          );
          console.log(response);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.Commentinput}>
      <h3 className={styles.title}>Leave a Comment</h3>
      <br />
      <p className={styles.info}>
        Your email address will not be published. Required fields are marked *
      </p>

      <div className={styles.form}>
        <label className={styles.label}>Your Comment *</label>
        <textarea
          type="text"
          className="inp"
          placeholder="Write A Comment..."
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
        <p className="errortxt">{error.content}</p>
        <br />

        <label className={styles.label}>Your Name *</label>
        <input
          type="text"
          className="inp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="errortxt">{error.name}</p>
        <br />

        <label className={styles.label}>Email ID *</label>
        <input
          type="email"
          className="inp"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <p className="errortxt">{error.email}</p>
        <br />

        <label className={styles.label}>Your Website Url </label>
        <input
          type="text"
          className="inp"
          value={url}
          onChange={(e) => seturl(e.target.value)}
        />
        <p className="errortxt">{error.url}</p>
        <br />

        <button
          className={!load ? styles.btn : styles.disbtn}
          disabled={load}
          onClick={() => AddComment()}
        >
          {!load ? "Post Comment" : "Posting..."}
        </button>
      </div>
    </div>
  );
}

export default Commentinput;
