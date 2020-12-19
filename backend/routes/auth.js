const express = require('express');
const router = express.Router();

const { googlelogin, facebooklogin, register, login } = require('../controllers/auth.js');
// import controller
/*const { signup, accountActivation, forgotPassword, resetPassword } = require('../controllers/auth.js');

router.post('/signup', signup);
router.post('/accountactivation', accountActivation);

//forgot/reset password routes
router.put('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);*/

router.post('/googlelogin', googlelogin);

router.post('/facebooklogin', facebooklogin);

router.post('/login', login);

router.post('/register', register);

module.exports = router;