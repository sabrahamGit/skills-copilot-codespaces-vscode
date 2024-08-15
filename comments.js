// Create web server
// 1. Create a web server
// 2. Create a route for GET request to /comments
// 3. Create a route for POST request to /comments
// 4. Create a route for DELETE request to /comments/:id
// 5. Listen on port 3000

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const comments = [
  { id: 1, author: "John Doe", text: "Hello world" },
  { id: 2, author: "Jane Doe", text: "Hi, planet!" }
];

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.post("/comments", (req, res) => {
  const comment = req.body;
  comment.id = comments.length + 1;
  comments.push(comment);
  res.json(comment);
});

app.delete("/comments/:id", (req, res) => {
  comments = comments.filter(comment => comment.id !== parseInt(req.params.id));
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});