import { serialize } from "cookie";
export default function handler(req, res) {
  res.setHeader("Set-Cookie", [
    serialize("auth", "", {
      maxAge: -1,
      path: "/",
    }),
  ]);
  res.send({ auth: false });
  res.end();
}
