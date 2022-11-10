import Postdata from "../../database/blogposts";
import authuser from "./authsts";
export default function handler(req, res) {
  authuser(req, res);
  console.log(req.body);
  if (req.method === "POST") {
    const { title, poster, content, desc, tags, cate, auther, uri, view, pid } =
      req.body;
    if ((title, poster, content, desc, tags, cate, auther, uri, view, pid)) {
      Postdata.updateOne(
        { _id: pid },
        {
          $set: {
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
          },
        },
        (err, result) => {
          if (err) {
            res.send({ error: err });
          } else {
            res.send({ result });
          }
        }
      );
    }
  } else {
    res.send({ error: "Invalid Request" });
  }
}
