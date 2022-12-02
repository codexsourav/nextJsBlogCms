import Link from "next/link";
import React, { useState } from "react";
import styles from "./comStyles/blogfotter.module.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";
function Blogfotter() {
  const [email, setEmail] = useState("");
  const [error, seterror] = useState("");
  const [load, setload] = useState(false);

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const addFollower = () => {
    seterror("");
    if (email.length == 0) {
      seterror("Please Enter Your Email ID");
      return false;
    }

    if (!validateEmail(email)) {
      seterror("Please Enter a Valid Email ID");
      return false;
    }

    setload(true);

    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    };

    fetch("/api/follow", options)
      .then((response) => response.json())
      .then((response) => {
        setload(false);
        if (response.error) {
          if (response.type == "exist") {
            setEmail("");
            Swal.fire("Congratulations", response.error, "success");
          } else {
            Swal.fire("OH NO!", response.error, "error");
          }
        } else {
          setEmail("");
          Swal.fire(
            "Thank You!",
            "Send You a Email On Public a New Post",
            "success"
          );
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className={styles.blogfotter}>
      <div className={styles.backtop}>
        <a href="#">↑ back to top</a>
      </div>

      <div className={styles.bottamsec}>
        {/* links section  */}
        <div className={styles.links}>
          <p className={styles.title}>Links</p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About US</Link>
            </li>
            <li>
              <Link href="/privacypolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* folliw sectionn  */}
        <div className={styles.followbox}>
          <p className={styles.title}>Newsletter</p>
          <div className={styles.followinpbox}>
            <p className={styles.flotit}>Get new posts by email</p>
            <br />
            <small className="errortxt">{error}</small>
            <br />
            <input
              type="email"
              className="inp"
              placeholder="Your Email ID"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <button
              disabled={load}
              className={!load ? styles.clbtn : styles.dlsbtn}
              onClick={() => {
                addFollower();
              }}
            >
              {!load ? (
                "Subscribe"
              ) : (
                <p className="spin">
                  <FaSpinner />
                </p>
              )}
            </button>
          </div>
        </div>
        <div className={styles.socaillinks}>
          <p className={styles.title}>Contact</p>
          <br />
          <div className={styles.socailbox}>
            <ul>
              <li className={styles.fb}>
                <a
                  href="https://www.facebook.com/fbinsourav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className={styles.ig}>
                <a
                  href="https://www.instagram.com/codexsourav/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className={styles.gh}>
                <a
                  href="https://github.com/codexsourav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className={styles.yt}>
                <a
                  href="https://www.youtube.com/channel/UCENvANETSckCOAonuFMGYiw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogfotter;
