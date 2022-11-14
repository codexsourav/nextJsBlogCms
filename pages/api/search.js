import Postdata from "../../database/blogposts";
export default function handler(req, res) {
  const find = req.body.find;
  var redux = new RegExp(find, "i");

  if (find) {
    Postdata.find({ title: redux, view: 1 }, { content: 0, tags: 0, view: 0 })
      .sort({ date: -1 })
      .then((d) => {
        if (d != "") {
          res.send(d);
        } else {
          res.send({ error: "No Result Found" });
        }
      });
  } else {
    res.send({ error: "No Result Found" });
  }
}
