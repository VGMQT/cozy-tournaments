const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  })
);

const validateUser = user => {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    isAdmin: Joi.boolean().default(false),
  };

  return Joi.validate(user, schema);
};

exports.User = User;
exports.validateUser = validateUser;
