const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from github actions");
});

app.get("/posts", (req, res) => {
  const data = [
    { id: 1, title: "first title", content: "firest content" },
    { id: 2, title: "second title", content: "second content" },
    { id: 3, title: "third title", content: "third content" },
  ];
  res.json(data);
});

app.listen(8080, () => {
  console.log("server is running on port 8080...");
});
