import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Adminnavbar from "../../../siteconponent/adminConponent/component/adminnavbar";
import Loder from "../../../siteconponent/adminConponent/component/loder";
import Sidebar from "../../../siteconponent/adminConponent/component/sidebar";
import Commentbox from "../../../siteconponent/blogcomponent/comment/commentbox";
function Comment() {
  const roues = useRouter();
  const { id } = roues.query;

  const [data, setData] = useState([]);
  const [blog, setblog] = useState([]);
  const [load, setLoad] = useState(false);

  const loadcomment = () => {
    const options = { method: "GET" };
    fetch(`/api/managecomment/${id}`, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };

  const loadpost = () => {
    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fby: "_id", sid: id }),
    };
    fetch(`/api/blog`, options)
      .then((response) => response.json())
      .then((response) => setblog(response))
      .catch((err) => console.error(err));
  };

  const updatecomment = (cid, val) => {
    setLoad(true);
    let options = {
      method: "PUT",
      headers: {
        Accept: "*/*",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cid, type: !val }),
    };
    fetch(`/api/managecomment/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        setLoad(false);
        loadcomment();
      })
      .catch((err) => console.error(err));
  };

  // deletee data
  const deletedata = (cid) => {
    Swal.fire({
      html: "<b>Do you want to Delete this post?</b>",
      showCancelButton: true,
      icon: "info",
      confirmButtonText: "DELETE",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoad(true);
        let url = `/api/managecomment/${id}`;

        let options = {
          method: "DELETE",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cid }),
        };

        fetch(url, options)
          .then((res) => res.json())
          .then((json) => {
            if (json.status == true) {
              setLoad(false);
              loadcomment();
              Swal.fire("Deleted!", "", "success");
            }
          })
          .catch((err) => console.error("error:" + err));
      }
    });
  };

  useEffect(() => {
    loadcomment();
    loadpost();
  }, []);

  return (
    <>
      {load ? <Loder /> : null}
      <Adminnavbar />
      <div className="container-admin">
        <div style={{ margin: 30 }}>
          <h2>
            {blog.title} | {data.length} Comments
          </h2>
          <br />
          <p>{blog.desc}</p>
          <br />
          <p>{blog.maindate}</p>
        </div>
        <hr />

        {data.map((e, i) => {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
                marginBottom: 60,
                marginTop: 20,
              }}
            >
              <Commentbox data={e} />
              {!e.view ? (
                <button
                  className="clbtn"
                  onClick={() => {
                    updatecomment(e._id, e.view);
                  }}
                >
                  Approved
                </button>
              ) : (
                <button
                  className="clbtn2"
                  onClick={() => {
                    updatecomment(e._id, e.view);
                  }}
                >
                  Disapproved
                </button>
              )}
              <button
                className="rclbtn"
                onClick={() => {
                  deletedata(e._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <Sidebar />
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
export default Comment;
