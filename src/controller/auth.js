const { response } = require('express');

const { generateJWT } = require('../helper/jwt');
const connectionDB = require('../database/dbConnection');

const errorsHandling = (err, res) => {
    if (err) {
        return res.status(500).json({
            success: false,
            message: `Error checking: ${err}`
        });
    }
}

const signUp = async (req, res) => {
    const { name, lastName, email, password, type_user } = req.body;

    try {
        await connectionDB.query(`SELECT * FROM auth WHERE email = '${email}'`, async (err, result) => {
            await errorsHandling(err, res);
            if (result.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: 'User already exists'
                });
            }
        });

        const query = `INSERT INTO auth (name, lastName, password, email, type_user) 
        VALUES ('${name}', '${lastName}', '${password}', '${email}', '${type_user}')`;

        await connectionDB.query(query, async (err, result) => {
            await errorsHandling(err, res);
            return res.status(200).json({
                success: true,
                message: 'User created successfully'
            });
        });

    } catch (error) {
        errorsHandling(error);
    }

};

const signIn = async (req, res) => {
    const { email, password } = req.body;
    await connectionDB.query(`SELECT * FROM auth WHERE email = '${email}' AND password = '${password}'`, async (err, result) => {
        await errorsHandling(err, res);
        if (result.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'User does not exist, check your email/password'
            });
        }
        const { user_id, name, lastName, email, type_user } = result[0];
        const token = await generateJWT(user_id, name, lastName, email, type_user);
        return res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            token,
        });
    });
}

const getUsers = async (req, res) => {
    await connectionDB.query(`SELECT * FROM auth`, async (err, result) => {
        await errorsHandling(err);
        return res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            users: result
        });
    });
}

module.exports = {
    signUp,
    signIn,
    getUsers
};