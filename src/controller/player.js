const connectionDB = require('../database/dbConnection');

const createPlayer = async (req, res) => {
    const { player_id, name, age, team_id, squad_number, position, nationality } = req.body;

    //valid if team exists
    const team = `SELECT * FROM teams WHERE team_id = ${team_id}`;
    await connectionDB.query(team, async (err, result) => {
        if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
        if (result.length === 0) return res.status(400).json({ success: false, message: 'Team does not exist, create first' });

        const query = `INSERT INTO players (player_id, name, age, team_id, squad_number, position, nationality)
        VALUES ('${player_id}', '${name}', ${age}, '${team_id}', ${squad_number}, '${position}', '${nationality}')`;

        await connectionDB.query(query, (err, result) => {
            if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
            return res.status(200).json({
                success: true,
                message: 'Player created successfully',
                data: result
            });
        });
    });
}

const getPlayers = async (req, res) => {
    const query = `SELECT * FROM players`;
    await connectionDB.query(query, async (err, result) => {
        //await errorsHandling(err);
        return res.status(200).json({
            success: true,
            data: result
        });
    });
};

const getPlayer = async (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM players WHERE player_id = '${id}'`;
    await connectionDB.query(query, async (err, result) => {
        if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
        if (result.length === 0) return res.status(400).json({ success: false, message: 'Player does not exist' });
        return res.status(200).json({
            success: true,
            data: result
        });
    });
};

const updatePlayer = async (req, res) => {
    const { id } = req.params;
    const { name, age, team_id, squad_number, position, nationality } = req.body;

    const player = `SELECT * from players WHERE player_id = '${id}'`;
    await connectionDB.query(player, async (err, result) => {
        if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
        if (result.length === 0) return res.status(400).json({ success: false, message: 'Player does not exist' });

        const query = `UPDATE players SET name = '${name || result[0].name}', age = ${age || result[0].age},
        team_id = '${team_id || result[0].team_id}', squad_number = ${squad_number || result[0].squad_number},
        position = '${position || result[0].position}', nationality = '${nationality || result[0].nationality}' 
        WHERE player_id = '${id}'`;

        await connectionDB.query(query, async (err, result) => {
            if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
            return res.status(200).json({
                success: true,
                message: 'Player updated successfully'
            });
        });
    });
};

const deletePlayer = async (req, res) => {
    const { id } = req.params;
    const player = `SELECT * from players WHERE player_id = '${id}'`;
    await connectionDB.query(player, async (err, result) => {
        if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
        if (result.length === 0) return res.status(400).json({ success: false, message: 'Player does not exist' });

        const query = `DELETE FROM players WHERE player_id = '${id}'`;
        await connectionDB.query(query, async (err, result) => {
            if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
            return res.status(200).json({
                success: true,
                message: 'Player deleted successfully'
            });
        });
    });

};

module.exports = {
    getPlayers,
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer
};