'use strict';

const router = require('express').Router();
const user = require('../controllers/user');
const option = require('../controllers/option');

router.get('/login/:email', user.getUser); // '/login:id maybe??
router.post('/register', user.createUser);
router.get('/options', option.getOptions);
router.post('/addToWl', user.addToWatchlist);
router.post('/addToPf', user.addToPortfolio);
router.put('/sell', user.sell);

module.exports = router;