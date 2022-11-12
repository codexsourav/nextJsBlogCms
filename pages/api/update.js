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
            maindate: today,
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
