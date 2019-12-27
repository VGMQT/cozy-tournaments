const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('../security/jwt');

const router = express.Router();
const _ = require('lodash');
const { User, validateUser } = require('../models/user');

router.post('/', async (req, res) => {
  // Validate The Request
  const { error } = validateUser(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if this user already exists
  let user = await User.findOne({ email: req.body.email });

  if (user) {
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      return res.status(400).send('Incorrect email or password.');
    }

    const token = jwt.sign({ _id: user._id });
    res.header('x-auth-token', token).send(_.pick(user, ['isAdmin']));
  } else {
    // Insert the new user if they do not exist yet
    user = new User(_.pick(req.body, ['email', 'password', 'isAdmin']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = jwt.sign({ _id: user._id });
    res.header('x-auth-token', token).send(_.pick(user, ['isAdmin']));
  }
});

module.exports = router;
