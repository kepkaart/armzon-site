const express = require('express');
const router = express.Router();
const User = require('/models/User');
const auth = require('/middleware/auth');

// Профиль
router.get('/profile', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.render('profile', { user });
    } catch (err) {
        res.redirect('/login');
    }
});

// Выход
router.get('/logout', (req, res) => {
    res.clearCookie('token').redirect('/');
});

module.exports = router;