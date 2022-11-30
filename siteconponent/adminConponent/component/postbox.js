import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Postbox(props) {
  const [del, setdel] = useState(true);

  const deletedata = () => {
    Swal.fire({
      html: "<b>Do you want to Delete this post?</b>",
      showCancelButton: true,
      icon: "info",
      confirmButtonText: "DELETE",
    }).then((result) => {
      if (result.isConfirmed) {
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
              Swal.fire("Deleted!", "", "success");
            }
          })
          .catch((err) => console.error("error:" + err));
      }
    });
  };
  return (
    <div style={{ padding: 30 }}>
      <h2>{props.title}</h2>
      <br />
      <p style={{ marginBottom: 10 }}>{props.desc}</p>
      <br />
      {del ? (
        <>
          <Link href={`/admin/update/${props.id}`} className="clbtn">
            UPDATE
          </Link>

          <button
            style={{ marginLeft: 20 }}
            disabled={!del}
            onClick={() => {
              deletedata();
            }}
            className={del ? "rclbtn" : "disbtn"}
          >
            {!del ? "DEL..." : "DELETE"}
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Postbox;
