const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.post('/', (req, res) => {
  controller.getStatus(res);
});

router.post('/post/:size', (req, res) => {
  controller.postData(req, res);
});

module.exports = router;
