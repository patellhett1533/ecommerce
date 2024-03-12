const express = require('express');
const router = express.Router();
const { signup, login } = require('../../controller/admin/auth');

router.post('/admin/login', login);

router.post('/admin/signup', signup);

module.exports = router;