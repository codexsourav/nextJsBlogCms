import Postdata from "../../database/blogposts";
export default function handler(req, res) {
  if (req.method === "GET") {
    const { fby, sid } = req.body;
    if ((fby, sid)) {
      Postdata.findOne({ [fby]: sid })
        .then((d) => {
          if (d) {
            res.send(d);
          } else {
            res.send({ error: 404 });
          }
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
