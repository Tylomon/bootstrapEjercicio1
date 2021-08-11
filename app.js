const express = require("express");
const app = express();
const port = process.env.PORT||5000;

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/404.html")
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});