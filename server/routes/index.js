const express = require('express');
const router = express.Router();

router.get('/message', function (req, res, next) {
  res.json('Welcome To React');
});

module.exports = router;