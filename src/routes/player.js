const { Router } = require('express');
const {
    getPlayers,
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer
} = require('../controller/player');

const router = Router();

router.post('/new', createPlayer);
router.get('/', getPlayers);
router.get('/:id', getPlayer);
router.put('/update/:id', updatePlayer);
router.delete('/delete/:id', deletePlayer);

module.exports = router;