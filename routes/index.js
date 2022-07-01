const express = require('express');
const listController = require('../controllers/listController')

const router = express.Router();

router.get('/list', listController.getAll)

router.post('/list', listController.createTask)

module.exports = router;