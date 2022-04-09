const { Router } = require('express');
const {
    getPlayers,
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer,
    findByQueryParams
} = require('../controller/player');

const router = Router();

/**
 * @swagger
* /player/players:
*  get:
*    tags:
*      - Player
*    summary: Get all players
*    description: Get all information about all players
*    produces:
*      - application/json
*    responses:
*      200:
*        description: Players retrieved successfully
*      400:
*        description: Bad request
*      500:
*        description: Internal server error
 * 
 */
router.get('/players', getPlayers);

/**
 * @swagger
* /player/{id}:
*   get:
*     tags:
*       - Player
*     summary: Get one player
*     description: Get all information about one player
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*           required: true
*           description: Get player_id
*     responses:
*       200:
*         description: Player retrieved successfully
*       404:
*         description: Player not found
*       500:
*         description: Internal server error
 */
router.get('/:id', getPlayer);

/**
 * @swagger
* /player/new:
*   post:
*     tags:
*       - Player
*     summary: Create a new player
*     description: Create a new player with all information
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/Player'
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     responses:
*       201:
*         description: Player created
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
 * 
 */
router.post('/new', createPlayer);

/**
 * @swagger
* /player/update/{id}:
*   put:
*     tags:
*       - Player
*     summary: Update a Player
*     description: Update the information of a Player
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/Player'
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*           required: true
*           description: Get player_id
*     responses:
*       200:
*         description: Player updated
*       404:
*         description: Player not found
*       500:
*         description: Internal server error
 */
router.put('/update/:id', updatePlayer);

/**
 * @swagger
* /player/delete/{id}:
*   delete:
*     tags:
*       - Player
*     summary: Delete a player
*     description: Delete the information of a player
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*           required: true
*           description: Get player_id
*     responses:
*       200:
*         description: Player deleted
*       404:
*         description: Player not found
*       500:
*         description: Internal server error
 */
router.delete('/delete/:id', deletePlayer);

/**
 * @swagger
* /player/:
*   get:
*     tags:
*       - Player
*     summary: Filter players
*     description: Filter players by query params
*     parameters:
*       - in: query
*         name: position
*         schema:
*           type: string
*           enum: ['attack','middle','defense']
*           description: filter by position of players
*       - in: query
*         name: team
*         schema:
*           type: string
*           description: filter by team of players
*       - in: query
*         name: country
*         schema:
*           type: string
*           description: filter by country of players
*     responses:
*       200:
*         description: Find players by filter
*       404:
*         description: Players not found
*       500:
*         description: Internal server error
 */
router.get('/', findByQueryParams);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *      Player:
 *          type: object
 *          properties:
 *              player_id:
 *                  type: string
 *                  description: id unique for each player
 *              name:
 *                  type: string
 *                  description: name of the player
 *              age:
 *                  type: number
 *                  description: age of the player
 *              team_id:
 *                  type: string
 *                  description: id of the team
 *              squad_number:
 *                  type: number
 *                  description: number of the player in the team
 *              position:
 *                  type: string
 *                  description: position of the player ['attack', 'middle', 'defense']
 *              nationality:
 *                  type: string
 *                  description: nationality of the player
 *          required:
 *              - player_id
 *              - team_id
 *          example:
 *              player_id: 1001
 *              name: John Doe
 *              age: 30
 *              team_id: 101
 *              squad_number: 1
 *              position: attack
 *              nationality: Colombiano
 */