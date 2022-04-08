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
*        content:
*          application/json:
*            schema:
*              type: array
*              items:
*                $ref: "#/components/schemas/Team"
*      400:
*        description: Bad request
*      500:
*        description: Internal server error
 * 
 */
router.get('/teams', getTeams);
router.get('/:id', getTeam);
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
 *              team_id: 101
 *              name: Liverpool
 *              league: Premier League
 *              country: England
 */

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
router.put('/update/:id', updateTeam);
router.delete('/delete/:id', deleteTeam);

module.exports = router;