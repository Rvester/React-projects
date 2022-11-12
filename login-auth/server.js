const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = 8080;
app.use(cors());

//temporary path to see how to communicate frontend with backend
app.get("/test", (req, res) => {
  res.status(200).json({ msg: "Hello!" });
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
