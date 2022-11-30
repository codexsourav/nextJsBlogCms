import React from "react";
import Adminnavbar from "../../siteconponent/adminConponent/component/adminnavbar";
import Sidebar from "../../siteconponent/adminConponent/component/sidebar";
import Upload from "../../siteconponent/adminConponent/component/upload";

function upload() {
  return (
    <>
      <Adminnavbar />
      <div className="container-admin">
        <Upload />
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
export default upload;
