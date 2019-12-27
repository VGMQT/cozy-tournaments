const mongoose = require('mongoose');
const Joi = require('joi');

const Tournament = mongoose.model(
  'Tournament',
  new mongoose.Schema({
    discipline: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
  })
);

const validateTournament = tournament => {
  const schema = {
    discipline: Joi.string().required(),
    type: Joi.string().required,
    name: Joi.string()
      .min(5)
      .max(255)
      .required(),
  };

  return Joi.validate(tournament, schema);
};

exports.Tournament = Tournament;
exports.validate = validateTournament;
