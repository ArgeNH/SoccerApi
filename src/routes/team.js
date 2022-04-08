const { Router } = require('express');
const {
    getTeams,
    getTeam,
    createTeam,
    updateTeam,
    deleteTeam
} = require('../controller/team');

const router = Router();

router.get('/', getTeams);
router.get('/:id', getTeam);
router.post('/new', createTeam);
router.put('/update/:id', updateTeam);
router.delete('/delete/:id', deleteTeam);

module.exports = router;