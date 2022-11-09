import jwt from "jsonwebtoken";
export default function handler(req, res) {
  if (req.cookies.auth) {
    try {
      const decode = jwt.verify(req.cookies.auth, "sourav404");
      res.json({ auth: true, ...decode });
      return false;
    } catch {
      (e) => {
        res.status(500).json({ auth: false });
        return false;
      };
    }
  } else {
    res.status(500).json({ auth: false });
    return false;
  }
}
