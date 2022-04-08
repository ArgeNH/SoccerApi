const { Router } = require('express');
const {
    getTeams,
    getTeam,
    createTeam,
    updateTeam,
    deleteTeam
} = require('../controller/team');

const router = Router();

/**
 * @swagger
* /team/teams:
*  get:
*    tags:
*      - Team
*    summary: Get all teams
*    description: Get all information about all teams
*    produces:
*      - application/json
*    responses:
*      200:
*        description: Teams retrieved successfully
*      400:
*        description: Bad request
*      500:
*        description: Internal server error
 * 
 */
router.get('/teams', getTeams);

/**
 * @swagger
* /team/{id}:
*   get:
*     tags:
*       - Team
*     summary: Get one team
*     description: Get all information about one team
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*           required: true
*           description: Get team_id
*     responses:
*       200:
*         description: Team retrieved successfully
*       404:
*         description: Team not found
*       500:
*         description: Internal server error
 */
router.get('/:id', getTeam);

/**
 * @swagger
* /team/new:
*   post:
*     tags:
*       - Team
*     summary: Create a new team
*     description: Create a new team
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/Team'
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     responses:
*       201:
*         description: Team created
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
 * 
 */
router.post('/new', createTeam);

/**
 * @swagger
* /team/update/{id}:
*   put:
*     tags:
*       - Team
*     summary: Update a team
*     description: Update the information of a team
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/Team'
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*           required: true
*           description: Get team_id
*     responses:
*       200:
*         description: Team updated
*       404:
*         description: Team not found
*       500:
*         description: Internal server error
 */
router.put('/update/:id', updateTeam);

/**
 * @swagger
* /team/delete/{id}:
*   delete:
*     tags:
*       - Team
*     summary: Delete a team
*     description: Delete the information of a team
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*           required: true
*           description: Get team_id
*     responses:
*       200:
*         description: Team deleted
*       404:
*         description: Team not found
*       500:
*         description: Internal server error
 */
router.delete('/delete/:id', deleteTeam);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *      Team:
 *          type: object
 *          properties:
 *              team_id:
 *                  type: string
 *                  description: id unique for each team
 *              name:
 *                  type: string
 *                  description: name of the team
 *              league:
 *                  type: string
 *                  description: league of the team
 *              country:
 *                  type: string
 *                  description: country of the team
 *          required:
 *              - team_id
 *          example:
 *              team_id: 108
 *              name: Everton
 *              league: Premier League
 *              country: Inglaterra
 */