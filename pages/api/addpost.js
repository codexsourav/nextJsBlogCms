import Postdata from "../../database/blogposts";
import authuser from "./authsts";
export default function handler(req, res) {
  authuser(req, res);
  console.log(req.body);
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
        view,
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
