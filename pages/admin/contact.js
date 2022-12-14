import React, { useEffect, useState } from "react";
import Adminnavbar from "../../siteconponent/adminConponent/component/adminnavbar";
import Sidebar from "../../siteconponent/adminConponent/component/sidebar";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Contact() {
  const [data, setData] = useState([]);
  const [dataload, setLoad] = useState(false);

  const deletecon = (id) => {
    let url = "/api/getcontact";

    let options = {
      method: "DELETE",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (json.status == true) {
          Swal.fire("This data is Deleted!", "", "success");
          load();
        } else {
          alert(JSON.stringify(json));
        }
      })
      .catch((err) => console.error("error:" + err));
  };

  const load = () => {
    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    fetch("/api/getcontact", options)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoad(true);
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    load();
  }, []);

  if (data.length == 0) {
    return (
      <>
        <Adminnavbar />
        <Sidebar />
        <div className="container-admin">
          {!dataload ? <p>Loading...</p> : <p>No Data Found</p>}
        </div>
      </>
    );
  }

  return (
    <>
      <Adminnavbar />
      <Sidebar />
      <div className="container-admin">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((d) => {
                  return (
                    <>
                      <tr key={d._id}>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.message}</td>
                        <td>{d.date}</td>
                        <td>
                          <button
                            onClick={() => {
                              deletecon(d._id);
                            }}
                            className={`rclbtn`}
                            key={d._id}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              : null}
          </tbody>
        </table>
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
export default Contact;
