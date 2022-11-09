import Users from "./model/users";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { uname, pass } = req.body;
    // if inputes are empty
    if (uname == "" || pass == "") {
      res.send({ error: `Invalid Usrname Or Password` });
      return false;
    }
    Users.findOne({ uname, pass })
      .then((result) => {
        if (!result) {
          res.send({ error: `Invalid Usrname Or Password` });
        } else {
          var token = jwt.sign({ user: result._id }, "sourav404");
          res.setHeader(
            "set-Cookie",
            cookie.serialize("auth", token, {
              secure: false,
              maxAge: new Date(Date.now() + 90 * 24 * 3600000),
              path: "/",
            })
          );
          res.send({ login: true });
        }
      })
      .catch((err) => {
        res.status(500);
        res.send({ error: "Internel Server error" });
      });

    // or other any erequest
  } else {
    res.send({ error: "Invalid Request" });
  }
}
