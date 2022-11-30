import React, { useEffect, useState } from "react";

import { storage } from "../../../firebase";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import Image from "next/image";
import styles from "../styles/upload.module.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { MdDelete, MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Upload() {
  const [File, setFile] = useState("");
  const [getfile, setGetfile] = useState([]);
  const [laod, setLaod] = useState(false);

  // reload image
  const loadiamge = () => {
    listAll(ref(storage, "/images")).then((data) => {
      var imglength = data.items.length - 1;
      var imglist = [];
      data.items.map((item, i) => {
        getDownloadURL(item).then((url) => {
          const pathFb = item._location.path_;
          imglist[i] = { url, pathFb };

          if (imglength == i) {
            console.log(imglist);
            setGetfile(imglist);
          }
        });
      });
    });
  };

  // delete Image function

  const deleteImage = async (url) => {
    const AdkYou = await Swal.fire({
      html: "<b>Do you want to Delete this Image?</b>",
      showCancelButton: true,
      icon: "info",
      confirmButtonText: "DELETE",
    });
    const askdata = await AdkYou;
    if (askdata.isConfirmed == false) {
      return false;
    }

    const desertRef = ref(storage, url);

    deleteObject(desertRef)
      .then((d) => {
        loadiamge();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uplaodimg = () => {
    if (File != null) {
      const imgref = ref(storage, `images/${v4() + File.name}`);
      const extension = File.name.split(".").pop();
      const validext = ["jpg", "jpeg", "gif", "png"];
      if (!validext.includes(extension)) {
        Swal.fire(
          "Please Select A Valid Image",
          "only jpg,jpeg,png,gif Valid",
          "error"
        );
        return false;
      }
      setLaod(true);
      uploadBytes(imgref, File)
        .then((e) => {
          setLaod(false);
          Swal.fire("Image Is Uploaded", "", "success");
          setFile("");
          loadiamge();
        })
        .catch((e) => {
          setLaod(false);
          console.log(e);
        });
    } else {
      Swal.fire("Please Select A Image", "only jpg,jpeg,png,gif Valid", "info");
    }
  };

  useEffect(() => {
    loadiamge();
  }, []);

  return (
    <>
      <label style={{ display: "block", marginTop: 30, marginBottom: 10 }}>
        Upload Image
      </label>
      <input
        type="file"
        className="inp"
        onChange={(e) => {
          console.log(e.target.files);
          setFile(e.target.files[0]);
        }}
        style={{ marginBottom: 30, marginTop: 20 }}
      />
      <button
        disabled={laod}
        className={!laod ? "clbtn" : "disbtn"}
        onClick={() => {
          uplaodimg();
        }}
      >
        {!laod ? "Uplaod Image" : "Uploading..."}
      </button>
      <br />
      <div className={styles.img}>
        {getfile
          ? getfile.map((d) => {
              return (
                <div style={{ width: 200 }} key={d.url}>
                  <input value={d.url} className="inp" readOnly={true} />
                  <Image
                    alt="Google Firebase"
                    src={d.url}
                    width={300}
                    height={150}
                    className={styles.imageshow}
                    quality={10}
                  />
                  <div className={styles.querybox}>
                    <CopyToClipboard
                      text={d.url}
                      onCopy={() => {
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Copy To Clipbord",
                          html: `<small>${d.url}</small>`,
                          showConfirmButton: false,
                          timer: 1000,
                        });
                      }}
                    >
                      <span className={styles.copyicon}>
                        <MdContentCopy /> <span>COPY</span>
                      </span>
                    </CopyToClipboard>
                    <span
                      className={styles.deleteicon}
                      onClick={() => {
                        deleteImage(d.pathFb);
                      }}
                    >
                      <MdDelete /> <span>DELETE</span>
                    </span>
                  </div>
                </div>
              );
            })
          : () => {
              return <p>NO Image Found</p>;
            }}
      </div>
    </>
  );
}

export default Upload;
