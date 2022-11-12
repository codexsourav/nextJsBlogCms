import Postdata from "../../database/blogposts";
export default function handler(req, res) {
  Postdata.find({ view: 1 }, { content: 0, tags: 0, view: 0 })
    .sort({ date: -1 })
    .then((d) => {
      res.send(d);
    });
}
