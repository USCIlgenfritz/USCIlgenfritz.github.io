const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/cars", (req, res) => {
  const cakes = [
    "Fast Cars",
    "Slow Cars",
    "Normal Cars",
    "IDK other cars",
  ];
  res.send(cakes);
});

app.listen(3000, () => {
  console.log("I'm Listening");
});
