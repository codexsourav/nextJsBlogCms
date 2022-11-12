import Link from "next/link";
import React, { useState } from "react";

function Postbox(props) {
  const [del, setdel] = useState(true);
  const deletedata = () => {
    let url = "/api/delete";

    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.id }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (json.status == true) {
          setdel(false);
          alert("Your data Is Deleted");
        }
      })
      .catch((err) => console.error("error:" + err));
  };
  return (
    <div style={{ padding: 30 }}>
      <h2>{props.title}</h2>
      <p style={{ marginBottom: 10 }}>{props.desc}</p>
      <br />
      {del ? (
        <>
          <Link href={`/admin/update/${props.id}`} className="clbtn">
            Update
          </Link>

          <button
            style={{ marginLeft: 20 }}
            href="#"
            onClick={() => {
              deletedata();
            }}
            className="rclbtn"
          >
            Delete
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Postbox;
