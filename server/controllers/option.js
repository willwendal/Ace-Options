'use strict';

const option = require('../models/option');


exports.getOptions = (req, res) => {
  try {
    const options = option.getAll();
    res.status(200);
    res.send(options);
  }
  catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
};