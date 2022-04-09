const { Router } = require('express');
const { signUp, signIn, getUsers } = require('../controller/auth');

const router = Router();

/**
 * @swagger
* /auth/login:
*   post:
*     tags:
*       - Auth
*     summary: Login in the application
*     description: Login in the applicacition with the token
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/Auth'
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     responses:
*       201:
*         description: Login succesful
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
 * 
 */
router.post('/login', signIn);
router.post('/register', signUp);
router.get('/', getUsers);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *      Auth:
 *          type: object
 *          properties:
 *              user_id:
 *                  type: integer
 *                  description: id unique for each user
 *              name:
 *                  type: string
 *                  description: name of the user
 *              lastName:
 *                  type: string
 *                  description: lastname of the user
 *              password:
 *                  type: string
 *                  description: password of the user
 *              email:
 *                  type: string
 *                  description: email of the user
 *              type_user:
 *                  type: string
 *                  description: role of the user ['administrator', 'user']
 *          required:
 *              - email
 *              - password
 *          example:
 *              email: darley1054@gmail.com
 *              password: "123456"
 */