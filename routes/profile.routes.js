const { Router } = require('express')
const verifyToken = require('../middlewares/verifyToken.middleware')
const router = Router()
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const config = require('config')

router.get(
    '/',
    verifyToken,
    async (req, res) => {
        const token = req.cookies['jwt'];

        const decoded = jwt.verify(token, config.get('jwtSecret'));

        const user = await User.findById(decoded.userId);
        res.json({
            user
        });
    }
)

router.post(
    '/',
    verifyToken,
    async (req, res) => {
        const token = req.cookies['jwt'];

        const decoded = jwt.verify(token, config.get('jwtSecret'));

        const user = await User.findById(decoded.userId);

        await User.findByIdAndUpdate(decoded.userId, {
            email: req.body.email,
            firstName: req.body.firstName,
            secondName: req.body.secondName
        });
        res.status(200).send();
    }
)

module.exports = router