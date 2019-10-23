const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  fullname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  contact: {
    type: String,
    minlength: 10,
    required: true
  },
  email: {
    type: String,
    required: true,
    minlength: 5
  },
  field: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  }
});

const User = mongoose.model("Users", userSchema);

function validateUser(user) {
  const schema = {
    firstname: Joi.string()
      .required()
      .min(3)
      .max(50),
    lastname: Joi.string()
      .required()
      .min(3)
      .max(50),
    fullname: Joi.string()
      .required()
      .min(5)
      .max(100),
    contact: Joi.string().min(10),
    email: Joi.string().email().required(),
    field: Joi.string()
      .required()
      .min(3)
      .max(100)
  };

  return Joi.validate(user, schema);
}

exports.validate = validateUser;
exports.User = User;
