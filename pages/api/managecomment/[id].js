import Comment from "../../../database/commentschema";
import authsts from "../authsts";

export default function handler(req, res) {
  const { id } = req.query;
  const cid = req.body.cid;
  const work = req.body.type;
  authsts(req, res);

  if (!id) {
    res.end({ error: "Invalid request!" });
  }

  if (req.method === "PUT") {
    Comment.updateOne(
      { _id: cid },
      {
        $set: {
          view: work,
        },
      }
    )
      .then((e) => {
        res.json({ status: true, res: e });
      })
      .catch((e) => {
        res.json({ status: false, res: e });
      });
  }

  // on get request
  if (req.method === "GET") {
    Comment.find({ postid: id })
      .sort({ date: -1 })
      .then((e) => {
        res.send(e);
      })
      .catch((e) => {
        res.send({ error: e });
      });
  }
  // on delete Request
  if (req.method === "DELETE") {
    if (!cid) {
      res.send({ error: "Please Add Comment id" });
      return false;
    }
    Comment.remove({ _id: cid, postid: id })
      .then((rm) => {
        res.send({ status: true, data: rm });
      })
      .catch((e) => {
        res.send({ error: e });
      });
  }
}
