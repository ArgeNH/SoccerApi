const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No token provided'
        });
    }
}

module.exports = {
    validateJWT
}