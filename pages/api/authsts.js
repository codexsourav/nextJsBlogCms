import jwt from "jsonwebtoken";

const authsts = (req, res) => {
  if (req.cookies.auth) {
    try {
      const decode = jwt.verify(req.cookies.auth, "sourav404");
      if (decode) {
        return decode;
      } else {
        res.send({ auth: false });
      }
    } catch (error) {
      res.send({ auth: false });
      return false;
    }
  } else {
    res.send({ auth: false });
    return false;
  }
};

module.exports = authsts;
