import Postdata from "../../database/blogposts";
import cookie from "cookie";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.body;

    if (!id) {
      res.send({ error: "invalid Request" });
      return false;
    }

    ///////=============================
    Postdata.findOne({ _id: id })
      .then((result) => {
        if (req.cookies.visit) {
          const oldcook = JSON.parse(req.cookies.visit).id;
          console.log(oldcook);
          if (!oldcook.includes(id)) {
            res.setHeader(
              "set-Cookie",
              cookie.serialize(
                "visit",
                JSON.stringify({ id: [id, ...oldcook] }),
                {
                  secure: false,
                  maxAge: new Date(Date.now() + 30 * 24 * 3600000),
                  path: "/",
                }
              )
            );
            Postdata.updateOne(
              { _id: id },
              { $set: { viewcount: result.viewcount + 1 } }
            )
              .then(() => {
                res.send({ view: true });
              })
              .catch((err) => {
                res.send({ error: err });
              });
          } else {
            res.send({ view: true });
          }
        } else {
          res.setHeader(
            "set-Cookie",
            cookie.serialize("visit", JSON.stringify({ id: [id] }), {
              secure: false,
              maxAge: new Date(Date.now() + 30 * 24 * 3600000),
              path: "/",
            })
          );
          Postdata.updateOne(
            { _id: id },
            { $set: { viewcount: result.viewcount + 1 } }
          )
            .then(() => {
              res.send({ view: true });
            })
            .catch((err) => {
              res.send({ error: err });
            });
        }
      })
      .catch((err) => {
        res.send({ error: "invalid Request No Post Found" });
      });
    ////////////////==========================================
  } else {
    res.send({ error: "invalid Request" });
  }
}
