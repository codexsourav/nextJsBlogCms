import ContactSchema from "../../database/contactSchema";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if ((name, email, message)) {
      const addcontact = new ContactSchema({
        name,
        email,
        message,
        date: Date.now(),
      });

      addcontact
        .save()
        .then((d) => {
          res.send({ add: true });
        })
        .catch((err) => {
          res.send({ error: "Server Error: " + err });
        });
    } else {
      res.send({ error: "invalid Request" });
    }
  } else {
    res.send({ error: "invalid Request" });
  }
}
