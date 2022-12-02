import Follow from "../../database/followschema";
import authuser from "./authsts";
export default function handler(req, res) {
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  if (req.method === "POST") {
    const email = req.body.email;
    console.log(email);
    if (!validateEmail(email)) {
      res.json({
        error: "Please Enate A Valid Email ID" + email,
        type: "error",
      });

      return false;
    }

    if (email) {
      const Follower = new Follow({
        email,
        date: Date.now(),
      });

      Follow.findOne({ email }).then((d) => {
        if (d == null) {
          //   save user
          Follower.save()
            .then((d) => {
              res.send({ add: true });
            })
            .catch((err) => {
              res.send({ error: "Server Error: " + err, type: "error" });
            });
        } else {
          res.send({ error: "Your Are Alrady Subscribed", type: "exist" });
          return false;
        }
      });
    } else {
      res.json({ error: "Please Enate A Valid Email ID", type: "error" });
      return false;
    }
  }
  // end Post Request
  if (req.method === "GET") {
    authuser(req, res);
    Follow.find()
      .sort({ date: -1 })
      .then((d) => {
        res.send(d);
      })
      .catch((e) => {
        res.send({ eror: e });
      });
  }
}
