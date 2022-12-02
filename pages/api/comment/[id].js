import Comment from "../../../database/commentschema";
import Post from "../../../database/blogposts";

export default function handler(req, res) {
  const { id } = req.query;
  if (!id) {
    res.end({ error: "Invalid request!" });
  }

  // month list
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = months[d.getMonth()];
  var amOrPm = d.getHours() < 12 ? "am" : "pm";

  const time = `${month} ${d.getDate()},${d.getFullYear()} at ${
    d.getHours() % 12 || 12
  }:${d.getMinutes()} ${amOrPm}`;

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  // if add post request
  if (req.method === "POST") {
    const { name, email, content, url } = req.body;
    // chack all data get
    if ((!name, !email, !content)) {
      res.json({ error: "Please Fill All Inputs" });
      return false;
    }

    // add data
    const AddComment = new Comment({
      postid: id,
      name,
      email,
      content,
      url,
      maindate: time,
      date: Date.now(),
    });
    //   save Comments

    Post.findOne({ _id: id }).then((e) => {
      if (e != null) {
        AddComment.save()
          .then((d) => {
            res.send({ add: true });
          })
          .catch((err) => {
            res.send({ error: "Server Error: " + err, type: "error" });
          });
      } else {
        res.end({ error: "Invalid request! No Post Found" });
      }
    });
  }

  // on get request
  if (req.method === "GET") {
    Comment.find({ postid: id, view: true }, { email: 0 })
      .sort({ date: -1 })
      .then((e) => {
        res.send(e);
      })
      .catch((e) => {
        res.send(e);
      });
  }
}
