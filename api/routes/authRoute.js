const { Router } = require('express');
const AuthController = require('../controllers/authController');

const router = Router();

router.post('/auth/login', (req, res) => {
    return AuthController.login(req, res);
});

module.exports = router;