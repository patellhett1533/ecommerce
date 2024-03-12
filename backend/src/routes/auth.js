const express = require('express');
const { signup, login } = require('../controller/auth');
const { validateSignupRequest, isRequestValidated } = require('../validation/auth');
const router = express.Router();


router.post('/signup', validateSignupRequest, isRequestValidated , signup);

router.post('/login', login);

module.exports = router;