import Postdata from "../../database/blogposts";
export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { fby, sid } = req.body;
    Postdata.findOne({ [fby]: sid }).then((d) => {
      res.send(d);
    });
  }
}
