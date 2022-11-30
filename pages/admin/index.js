import React, { useEffect, useState } from "react";

import Adminnavbar from "../../siteconponent/adminConponent/component/adminnavbar";
import Postbox from "../../siteconponent/adminConponent/component/postbox";
import Sidebar from "../../siteconponent/adminConponent/component/sidebar";
import styles from "../../siteconponent/blogcomponent/comStyles/home.module.css";

function Index(props) {
  const post = props.posts;
  const [posts, setposts] = useState([]);

  useEffect(() => {
    setposts(post);
  }, [post]);

  const [load, setload] = useState(6);
  const loadmore = () => {
    setload((d) => d + 6);
  };

  return (
    <>
      <Adminnavbar />
      <Sidebar />
      <div className="container-admin">
        {posts.auth != false ? (
          posts.slice(0, load).map((blog) => {
            return (
              <Postbox
                key={blog._id}
                id={blog._id}
                title={blog.uri}
                desc={blog.desc}
              />
            );
          })
        ) : (
          <>Loading....</>
        )}
        <br />
        <div className={styles.load}>
          {posts.length >= load ? (
            <button
              className={styles.loadmore}
              onClick={() => {
                loadmore();
              }}
            >
              Load More
            </button>
          ) : null}
        </div>
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
  const posts = await data.json();
  if (posts.auth == false) {
    return {
      redirect: {
        permanent: true,
        destination: "/admin/login",
      },
    };
  }
  return {
    props: { posts },
  };
}

export default Index;
