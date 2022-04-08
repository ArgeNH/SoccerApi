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
router.post('/new', createPlayer);

router.get('/players', getPlayers);
router.get('/:id', getPlayer);
router.put('/update/:id', updatePlayer);
router.delete('/delete/:id', deletePlayer);

router.get('/', findByQueryParams);

module.exports = router;