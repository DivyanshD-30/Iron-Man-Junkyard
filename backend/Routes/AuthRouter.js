const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const { ensureAuthenticated } = require('../Middlewares/Auth'); // Add the JWT middleware

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

// Test route to check authentication
router.get('/test', ensureAuthenticated, (req, res) => {
    res.json({
        message: 'You are authenticated!',
        user: req.user, // Display user info from JWT
        success: true
    });
});

module.exports = router;