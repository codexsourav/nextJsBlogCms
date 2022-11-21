import React, { useState } from "react";

import styles from "../siteconponent/blogcomponent/comStyles/contact.module.css";
import Head from "next/head";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [error, seterror] = useState("");
  const [btnp, setbtnp] = useState("Send Email");
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitContact = () => {
    if ((!name, !email, !message)) {
      seterror("Please Fill Add Inputs");
      return false;
    }
    if (name.length < 4) {
      seterror("Please Enter Your Full Name");
      return false;
    }

    if (!validateEmail(email)) {
      seterror("Please Enter Valid Email");
      return false;
    }

    if (message.length < 15) {
      seterror("Your Message Is Too short");
      return false;
    }
    seterror("");
    setbtnp("Sending...");
    let url = "/api/contact";

    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (json.add == true) {
          Swal.fire("Your Message Is Send", "", "success");
          setemail("");
          setmessage("");
          setname("");
          setbtnp("Send Email");
        }
      })
      .catch((err) => console.error("error:" + err));
  };

  return (
    <>
      <Head>
        <title>Codex Sourav | Contact Me</title>
        <meta name="robots" content="index,follow" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta content={process.env.HOST} property="og:url" />
        <meta
          content="codexsourav is Mainly about Latest Trending Updates , Trending Topics , Local News, Gaming News , and many more that&amp;#039;s make you update"
          property="og:description"
        />
        <meta
          content="codexsourav is Mainly about Latest Trending Updates , Trending Topics , Local News, Gaming News , and many more that&amp;#039;s make you update"
          name="description"
        />
        <meta content="CodeX Sourav" property="og:site_name" />
        <meta content="website" property="og:type" />
        <meta content="CodeX Sourav" property="og:title" />
        <meta content="CodeX Sourav" property="og:site_name" />
        <meta content="summary" name="twitter:card" />
        <meta content="CodeX Sourav" name="twitter:title" />
        <meta content={process.env.HOST} name="twitter:domain" />
        <meta
          content="codexsourav is Mainly about Latest Trending Updates , Trending Topics , Local News, Gaming News , and many more that&amp;#039;s make you update"
          name="twitter:description"
        />
        <meta
          name="google-site-verification"
          content="ZF8qUpgbcbsOzv2t3sBPBsu2nvPueKjGE4QLdyMftKM"
        />
      </Head>

      <div className="container">
        <div className={styles.contactform}>
          <h1 className={styles.contactit}>Contact US</h1>
          <br />
          <p className="errortxt">{error}</p>
          <label className={styles.lbl}>Full Name</label>
          <input
            className="inp"
            value={name}
            onChange={(d) => {
              setname(d.target.value);
            }}
            type="text"
          />
          <br />
          <label className={styles.lbl}>Email ID</label>
          <input
            className="inp"
            value={email}
            onChange={(d) => {
              setemail(d.target.value);
            }}
            type="email"
          />
          <br />
          <label className={styles.lbl}>Your Message</label>
          <textarea
            className="inp"
            value={message}
            onChange={(d) => {
              setmessage(d.target.value);
            }}
          ></textarea>
          <br />
          <button
            className={styles.btn}
            onClick={() => {
              submitContact();
            }}
          >
            {btnp}
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
