import Router from "next/router";
import React, { useState } from "react";
import Adminnavbar from "../../siteconponent/adminConponent/component/adminnavbar";
import Sidebar from "../../siteconponent/adminConponent/component/sidebar";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("../../siteconponent/adminConponent/component/editor"),
  { ssr: false }
);
import Swal from "sweetalert2/dist/sweetalert2.js";
import Imgget from "../../siteconponent/adminConponent/component/Imgget";

function Addpost() {
  const [content, setcontent] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [poster, setposter] = useState("");
  const [uri, seturi] = useState("");
  const [tags, settags] = useState("");
  const [auther, setauther] = useState("Sourav");
  const [cate, setcate] = useState("");
  const [view, setview] = useState(-1);
  const [Laod, setLaod] = useState(false);
  const [error, seterror] = useState("");

  // add post function

  const addnewpost = () => {
    setLaod(true);
    let url = "/api/addpost";

    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        poster,
        content,
        desc,
        tags,
        cate,
        auther,
        uri,
        view,
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setLaod(false);
        if (json.auth == false) {
          Router.replace("/admin/login");
          return false;
        } else {
          if (json.error) {
            seterror(json.error);
          } else {
            Swal.fire("Your New Post Is Added!", "", "success");
          }
        }
      })
      .catch((err) => console.error("error:" + err));
  };

  return (
    <>
      <Adminnavbar />
      <Sidebar />
      <Imgget />
      <div className="container-admin">
        <div className="errortxt">{error}</div>
        <label style={{ display: "block", marginTop: 30, marginBottom: 10 }}>
          Post Html Code
        </label>
        <Editor data={content} update={setcontent} />

        <label style={{ display: "block", marginBottom: 10, marginTop: 30 }}>
          Post Title
        </label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={title}
          onChange={(d) => {
            settitle(d.target.value);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Post Description
        </label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={desc}
          onChange={(d) => {
            setdesc(d.target.value);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>Poster Url</label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={poster}
          onChange={(d) => {
            setposter(d.target.value);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Post Auther
        </label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={auther}
          onChange={(d) => {
            setauther(d.target.value);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Blog Post Uri
        </label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={uri}
          onChange={(d) => {
            seturi(d.target.value);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>Post Tags</label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={tags}
          onChange={(d) => {
            settags(d.target.value);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Post Catagory
        </label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={cate}
          onChange={(d) => {
            setcate(d.target.value);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Post Visibility
        </label>
        <select
          className="inp"
          style={{ marginBottom: 30 }}
          value={view}
          onChange={(v) => {
            setview(v.target.value);
          }}
        >
          <option value={-1}>Private</option>
          <option value={1}>Public</option>
        </select>

        <button
          disabled={Laod}
          className={!Laod ? "clbtn" : "disbtn"}
          onClick={() => {
            addnewpost();
          }}
        >
          {!Laod ? "Add Your Post" : "Adding..."}
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const cook = context.req.cookies;

  let options = {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cook }),
  };
  const host = process.env.HOST;
  const data = await fetch(host + "/api/adminposts", options);
  const authg = await data.json();

  if (authg.auth == false) {
    return {
      redirect: {
        permanent: true,
        destination: "/admin/login",
      },
    };
  }
  return { props: { auth: true } };
}
export default Addpost;
