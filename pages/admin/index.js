import React, { useEffect, useState } from "react";

import Adminnavbar from "../../siteconponent/adminConponent/component/adminnavbar";
import Postbox from "../../siteconponent/adminConponent/component/postbox";
import Sidebar from "../../siteconponent/adminConponent/component/sidebar";

function Index(props) {
  const post = props.posts;
  const [posts, setposts] = useState([]);
  console.log(post);
  useEffect(() => {
    setposts(post);
  }, [post]);

  return (
    <>
      <Adminnavbar />
      <Sidebar />
      <div className="container-admin">
        {post.auth != false
          ? posts.map((blog) => {
              return (
                <Postbox
                  key={blog._id}
                  id={blog._id}
                  title={blog.uri}
                  desc={blog.desc}
                />
              );
            })
          : null}
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

  return {
    props: { posts },
  };
}

export default Index;
