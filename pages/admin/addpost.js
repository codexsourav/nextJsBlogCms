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
  const [data, setdata] = useState({
    title: "",
    desc: "",
    poster: "",
    uri: "",
    tags: "",
    auther: "Souarv",
    cate: "",
    view: -1,
  });

  const [content, setcontent] = useState("");

  const [Laod, setLaod] = useState(false);
  const [error, seterror] = useState("");

  const handelInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
    console.log({ [name]: value });
  };

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
      body: JSON.stringify({ ...data, content }),
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
            // empty all filds
            setdata({
              title: "",
              desc: "",
              poster: "",
              uri: "",
              tags: "",
              auther: "Souarv",
              cate: "",
              view: -1,
            });
            setcontent("");
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
          value={data.title}
          name="title"
          onChange={(d) => {
            handelInp(d);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Post Description
        </label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={data.desc}
          name="desc"
          onChange={(d) => {
            handelInp(d);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>Poster Url</label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={data.poster}
          name="poster"
          onChange={(d) => {
            handelInp(d);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Post Auther
        </label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={data.auther}
          name="auther"
          onChange={(d) => {
            handelInp(d);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Blog Post Uri
        </label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={data.uri}
          name="uri"
          onChange={(d) => {
            handelInp(d);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>Post Tags</label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={data.tags}
          name="tags"
          onChange={(d) => {
            handelInp(d);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Post Catagory
        </label>
        <input
          type="text"
          className="inp"
          style={{ marginBottom: 30 }}
          value={data.cate}
          name="cate"
          onChange={(d) => {
            handelInp(d);
          }}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          Post Visibility
        </label>
        <select
          className="inp"
          style={{ marginBottom: 30 }}
          value={data.view}
          name="view"
          onChange={(v) => {
            handelInp(v);
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
