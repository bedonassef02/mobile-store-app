const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const { signUpPipe } = require('../utils/pipes/users/sign-up.pipe');

router.post('/sign-up', signUpPipe, authController.signUp);

module.exports = router;
