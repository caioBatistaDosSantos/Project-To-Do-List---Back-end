const express = require('express');
const listController = require('../controllers/listController');
const validateTask = require('../middlewares/validateTask');

const router = express.Router();

router.get('/list', listController.getAll);

router.post('/list', validateTask, listController.createTask);

router.put('/list/:id', validateTask, listController.updateTask);

module.exports = router;