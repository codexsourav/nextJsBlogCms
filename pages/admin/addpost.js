import Router from "next/router";
import React, { useState } from "react";
import Adminnavbar from "./component/adminnavbar";
import Sidebar from "./component/sidebar";

// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CKEditor } from "@ckeditor/ckeditor5-react";

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

  const [error, seterror] = useState("");

  // add post function

  const addnewpost = () => {
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
        console.log(json);
        if (json.auth == false) {
          Router.replace("/admin/login");
          return false;
        } else {
          if (json.error) {
            seterror(json.error);
          } else {
            alert("Your New Post Is Added");
          }
        }
      })
      .catch((err) => console.error("error:" + err));
  };

  return (
    <>
      <Adminnavbar />
      <Sidebar />
      <div className="container-admin">
        <div className="errortxt">{error}</div>

        {/* <CKEditor
          removePlugins={"Image"}
          editor={ClassicEditor}
          data="<p> Write Your Blog Post</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
          }}
        /> */}
        <label style={{ display: "block", marginTop: 30, marginBottom: 10 }}>
          Post Html Code
        </label>
        <textarea
          type="text"
          className="inp"
          style={{ marginBottom: 30, height: 200 }}
          value={content}
          onChange={(d) => {
            setcontent(d.target.value);
          }}
        ></textarea>

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
          className="clbtn"
          onClick={() => {
            addnewpost();
          }}
        >
          Add Your Post
        </button>
      </div>
    </>
  );
}

export default Addpost;
