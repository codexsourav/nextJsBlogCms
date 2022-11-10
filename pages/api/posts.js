import Postdata from "../../database/blogposts";
export default function handler(req, res) {
  Postdata.find({ view: 1 }).then((d) => {
    res.send(d);
  });
}
