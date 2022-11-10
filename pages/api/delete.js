import Postdata from "../../database/blogposts";
import authuser from "./authsts";
export default function handler(req, res) {
  authuser(req, res);
  if (req.method === "POST") {
    if (req.body.id) {
      const id = req.body.id;

      Postdata.remove({ _id: id })
        .then((rm) => {
          if (rm) {
            res.send({ status: true });
          } else {
            res.send({ status: false });
          }
        })
        .catch((err) => {
          res.send({ error: err });
        });
    } else {
      res.send({ error: "invalis Request" });
    }
  } else {
    res.send({ error: "invalis Request" });
  }
}
