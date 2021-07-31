'use strict';

const User = require('../models/user');

const getUser = async (req, res) => {
  try {
    const selectedUser = await User.findOne({ 
      email: req.body.email,
      password: req.body.password
    });
    res.status(200);
    res.send(selectedUser);
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

const createUser = async (req, res) => {
  try {
    // console.log('req.body', req.body)
    User.create(req.body);
    res.status(201);
    res.send();
  }
  catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

const addToWatchlist = async (req, res) => {
  try {
    const user = await User.findOne( {email: req.body.email} );
    user.watchlist.push(req.body.option); // this data should come from the company and not the option chain
    await user.save();
    res.send();
  }
  catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

const addToPortfolio = async (req, res) => {
  try {
    const user = await User.findOne( {email: req.body.email} );
    console.log(user);
    user.portfolio.push(req.body.option);
    user.balance = user.balance - req.body.buyPrice; // multiply by the contract size
    // this should be user.balance = user.balance - req.body.option.ask*req.body.option.contract_size 
    // because the "buy price" you want to show on the browser is just the ask multiplied by the contract size
    await user.save();
    res.send();
  }
  catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

const sell = async (req, res) => {
  try {
    const user = await User.findOne( {email: req.body.email} );
    user.portfolio = user.portfolio.filter(option => option._id !== req.body.id);
    user.balance = user.balance + req.body.pl;
    await user.save();
    res.send();
  }
  catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

module.exports = {
  getUser,
  createUser,
  addToWatchlist,
  addToPortfolio,
  sell
}