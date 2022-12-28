import Postdata from "../../database/blogposts";
import cookie from "cookie";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.body;
    console.log(req.body);
    if (id) {
      if (req.cookies.visit) {
        res.send({ status: true, data: "User Alrady Visit" });
        return false;
      }
      Postdata.findOne({ _id: id })
        .then((d) => {
          if (d.viewcount) {
            Postdata.updateOne(
              { _id: id },
              { $set: { viewcount: d.viewcount + 1 } }
            )
              .then((d) => {
                res.send({ status: true, data: d });
              })
              .catch(() => {
                res.send({ error: e });
              });
          } else {
            Postdata.updateOne({ _id: id }, { $set: { viewcount: 1 } })
              .then((d) => {
                res.send({ status: true, data: d });
              })
              .catch(() => {
                res.send({ error: e });
              });
          }
          res.setHeader(
            "set-Cookie",
            cookie.serialize("visit", true, {
              secure: false,
              maxAge: new Date(Date.now() + 30 * 24 * 3600000),
              path: "/",
            })
          );
        })
        .catch((e) => {
          res.send({ error: e });
        });
    } else {
      res.send({ error: "invalid Request" });
    }
  } else {
    res.send({ error: "invalid Request" });
  }
}
