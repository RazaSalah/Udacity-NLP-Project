const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { analyze } = require("./analyze");

// configure env files
dotenv.config();

port = 8000;
const KEY = process.env.API_KEY;

// enabling the sending the message between two server
app.use(cors());

// convert the file to the json
app.use(express.json());

// telling the server render the given file
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.post("/", async (req, res) => {
  const url = req.body.URI;
  console.log(url);
  const Analyze = await analyze(url, KEY);
  const { code, msg, sample } = Analyze;

  if (code == 100) {
    return res.send({ msg: msg, code: code });
  } else if (code == 212) {
    return res.send({ msg: msg, code: code });
  }
  return res.send({ sample: sample, code: code });
  console.log(Analyze);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
