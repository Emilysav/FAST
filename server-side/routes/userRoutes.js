const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');

const router = express.Router()

router.route('/Login').post(authUser);
router.route('/').post(registerUser);



module.exports = router;