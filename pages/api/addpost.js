export default function handler(req, res) {
  res.status(200).json({
    name: "John Doe",
    age: 20,
    result: {
      ben: 20,
      eng: 19,
      math: 15,
      history: 16,
      books: ["ben", "eng"],
    },
  });
}
