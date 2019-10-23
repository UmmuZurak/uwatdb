const mongoose = require("mongoose");
const express = require("express");
const { User, validate } = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find().sort("firstname");
  res.send(users);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    fullname: req.body.fullname,
    contact: req.body.contact,
    email: req.body.email,
    field: req.body.field
  });

  user = await user.save();

  res.send(user);
});

module.exports = router;
