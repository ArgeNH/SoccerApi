const { Router } = require('express');
const { signUp, signIn, getUsers } = require('../controller/auth');

const router = Router();

router.post('/register', signUp);
router.post('/login', signIn);
router.get('/', getUsers);

module.exports = router;