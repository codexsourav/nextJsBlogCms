import React from "react";

import styles from "./component/comStyles/contact.module.css";
import Head from "next/head";
function Contact() {
  return (
    <>
      <Head>
        <title>Codex Sourav | Contact Me</title>
      </Head>

      <div className="container">
        <div className={styles.contactform}>
          <h1 className={styles.contactit}>Contact US</h1>
          <br />
          <form action="" method="post">
            <label className={styles.lbl}>Full Name</label>
            <input className="inp" type="text" />
            <br />
            <label className={styles.lbl}>Email ID</label>
            <input className="inp" type="email" />
            <br />
            <label className={styles.lbl}>Your Message</label>
            <textarea className="inp"></textarea>
            <br />
            <button type="submit" className={styles.btn}>
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
