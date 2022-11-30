import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Adminnavbar from "../../../siteconponent/adminConponent/component/adminnavbar";
import Sidebar from "../../../siteconponent/adminConponent/component/sidebar";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("../../../siteconponent/adminConponent/component/editor"),
  { ssr: false }
);
import Swal from "sweetalert2/dist/sweetalert2.js";
import Imgget from "../../../siteconponent/adminConponent/component/Imgget";

function Update() {
  const roues = useRouter();
  const { id } = roues.query;

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
  const [pid, setpid] = useState("");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    let url = "/api/blog";
    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fby: "_id", sid: id }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          Router.replace("/admin");
        }
        setcontent(json.content);
        settitle(json.title);
        setdesc(json.desc);
        setposter(json.poster);
        setauther(json.auther);
        seturi(json.uri);
        settags(json.tags);
        setcate(json.cate);
        setview(json.view);
        setpid(json._id);
      })
      .catch((err) => console.error("error:" + err));
  }, [id]);

  const upadtepost = () => {
    setLoad(true);
    let url = "/api/update";

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
        pid,
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setLoad(false);
        if (json.error) {
          seterror(json.err.error);
        } else {
          if (json.result.acknowledged == true) {
            Swal.fire("This Post is Updated!", "", "success");
          } else {
            console.log(json);
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
          disabled={load}
          className={!load ? "clbtn" : "disbtn"}
          onClick={() => {
            upadtepost();
          }}
        >
          {!load ? "Update Your Post" : "Updateing..."}
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

export default Update;
