const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const AppRouter = require("./routes");
const fileUpload = require("express-fileupload");
//const fs = require("fs");
const path = require("path");

console.log(process.env.MONGO_DB_PATH);
const port = process.env.PORT;

require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

mongoose.connect(process.env.MONGO_DB_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.set("useCreateIndex", true);

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
  })
);

AppRouter(app);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
