import ContactSchema from "../../database/contactSchema";
import jwt from "jsonwebtoken";
import authuser from "./authsts";
export default function handler(req, res) {
  if (req.method === "POST") {
    authuser(req, res);
    ContactSchema.find()
      .sort({ date: -1 })
      .then((d) => {
        res.send(d);
      })
      .catch((e) => {
        res.send({ eror: e });
      });
  } else if (req.method === "DELETE") {
    authuser(req, res);

    if (req.body.id) {
      const id = req.body.id;

      ContactSchema.remove({ _id: id })
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
    res.send({ error: "invalid request" });
  }
}
