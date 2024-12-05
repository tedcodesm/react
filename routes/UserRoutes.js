const express = require('express');
const { createUser } = require('../controllers/UserControler');
const router = express.Router();
router.use(express.json())

router.post('/createuser',createUser);

module.exports = router;
