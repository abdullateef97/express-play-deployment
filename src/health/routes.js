const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.post('/', (req, res) => {
  controller.getStatus(res);
});

module.exports = router;
