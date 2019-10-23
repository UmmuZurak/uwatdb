const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const app = express();

mongoose
  .connect("mongodb://localhost/uwatdb")
  .then(() => console.log("Connected to mongodb..."))
  .catch(err => console.error("Not connected to mongodb...", err));

app.use(express.json());
app.use("/api/users", users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
