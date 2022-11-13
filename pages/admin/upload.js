import React, { useEffect, useState } from "react";
import Adminnavbar from "../../siteconponent/adminConponent/component/adminnavbar";
import Sidebar from "../../siteconponent/adminConponent/component/sidebar";
import { storage } from "../../firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Image from "next/image";
import styles from "../../siteconponent/adminConponent/styles/upload.module.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Upload() {
  const [File, setFile] = useState(null);
  const [getfile, setGetfile] = useState([]);

  const loadiamge = () => {
    listAll(ref(storage, "/images")).then((data) => {
      data.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setGetfile((prev) => [...prev, url]);
        });
      });
    });
  };

  const uplaodimg = () => {
    if (File != null) {
      const imgref = ref(storage, `images/${v4() + File.name}`);
      uploadBytes(imgref, File)
        .then((e) => {
          Swal.fire("Image Is Uploaded", "", "success");
          setFile(null);
          loadiamge();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    loadiamge();
  }, []);

  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  return (
    <>
      <Adminnavbar />
      <Sidebar />
      <div className="container-admin">
        <label tyle={{ display: "block", marginTop: 30, marginBottom: 30 }}>
          Upload Image
        </label>
        <input
          type="file"
          className="inp"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          style={{ marginBottom: 30, marginTop: 20 }}
        />
        <button
          className="clbtn"
          onClick={() => {
            uplaodimg();
          }}
        >
          Uplaod Image
        </button>
        <br />
        <div className={styles.img}>
          {getfile
            ? removeDuplicates(getfile).map((d) => {
                return (
                  <div style={{ width: 200 }} key={d}>
                    <input value={d} className="inp" />
                    <Image
                      alt="Google Firebase"
                      src={d}
                      width={300}
                      height={150}
                      layout="responsive"
                    />
                  </div>
                );
              })
            : () => {
                return <p>NO Image Found</p>;
              }}
        </div>
      </div>
    </>
  );
}

export default Upload;
