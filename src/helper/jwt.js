const jwt = require('jsonwebtoken');

const generateJWT = (user_id, name, lastName, email, type_user) => {
    return new Promise((resolve, reject) => {
        const payload = { user_id, name, lastName, email, type_user };
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(`Can't generate token: ${err}`);
            }
            resolve(token);
        })
    })
}

module.exports = {
    generateJWT
}