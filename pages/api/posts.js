import Postdata from "./model/blogposts";
import authuser from "./model/authsts";
export default function handler(req, res) {
  console.log(authuser(req, res));
  Postdata.find().then((d) => {
    res.send(d);
  });
}
