const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsContrloller');

router.get('/', actorsController.list);
router.get('/detail/:id', actorsController.detail);


module.exports = router;