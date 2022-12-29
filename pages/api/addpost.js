import Postdata from "../../database/blogposts";
import authuser from "./authsts";
export default function handler(req, res) {
  authuser(req, res);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  if (req.method === "POST") {
    const { title, poster, content, desc, tags, cate, auther, uri, view } =
      req.body;
    if ((title, poster, content, desc, tags, cate, auther, uri, view)) {
      const addpost = new Postdata({
        title,
        poster,
        content,
        desc,
        tags,
        cate,
        auther,
        date: Date.now(),
        uri,
        maindate: today,
        view,
        viewcount: 0,
      });

      addpost
        .save()
        .then((d) => {
          res.send({ add: true });
        })
        .catch((err) => {
          res.send({ error: "Server Error: " + err });
        });
    }
  } else {
    res.send({ error: "Invalid Request" });
  }
}
