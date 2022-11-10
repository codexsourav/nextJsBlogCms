import React, { useState } from "react";

import Adminnavbar from "./component/adminnavbar";
import Postbox from "./component/postbox";
import Sidebar from "./component/sidebar";
function Index(props) {
  const [posts, setposts] = useState(props.posts);
  return (
    <>
      <Adminnavbar />
      <Sidebar />
      <div className="container-admin">
        {posts.map((blog) => {
          return (
            <Postbox
              key={blog._id}
              id={blog._id}
              title={blog.uri}
              desc={blog.desc}
            />
          );
        })}
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

  const data = await fetch("http://localhost:3000/api/adminposts", options);
  const posts = await data.json();
  console.log(posts);
  return {
    props: { posts },
  };
}

export default Index;
