const express = require('express');
const mongoose = require('mongoose');
const prv = require('./private/private.json');

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const app = express();

const auth = require('./routes/auth');

mongoose
  .connect(prv.atlas, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Now connected to MongoDB!'))
  .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/auth', auth);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
