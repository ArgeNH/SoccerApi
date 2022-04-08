const connectionDB = require('../database/dbConnection');
const redis = require('../database/redis');

const getTeams = async (req, res) => {

    redis.get('teams', async (err, result) => {

        const query = `SELECT * FROM teams`;
        await connectionDB.query(query, (err, result) => {
            if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
            if (result.length === 0) return res.status(400).json({ success: false, message: 'Teams does not exist' });

            redis.set('teams', JSON.stringify(result));
        });

        if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Teams retrieved successfully',
                data: JSON.parse(result)
            });
        }
    });

};

const getTeam = async (req, res) => {
    const { id } = req.params;

    redis.get(`team`, async (err, data) => {
        const query = `SELECT * FROM teams WHERE team_id = ${id}`;
        await connectionDB.query(query, async (err, result) => {
            if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
            if (result.length === 0) return res.status(400).json({ success: false, message: 'Team does not exist' });

            await redis.set(`team`, JSON.stringify(result));

            if (data) {
                return res.status(200).json({
                    success: true,
                    message: 'Team retrieved successfully',
                    data: JSON.parse(data)
                });
            }
        });
    });
}

const createTeam = async (req, res) => {
    const { team_id, name, league, country } = req.body;
    const query = `INSERT INTO teams (team_id, name, league, country) 
    VALUES ('${team_id}', '${name}', '${league}', '${country}')`;
    await connectionDB.query(query, (err, result) => {
        if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
        return res.status(200).json({
            success: true,
            message: 'Team created successfully',
            data: result
        });
    });
}

const updateTeam = async (req, res) => {
    const { id } = req.params;
    const { name, league, country } = req.body;

    const team = `SELECT * FROM teams WHERE team_id = '${id}'`;
    await connectionDB.query(team, async (err, result) => {
        if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
        if (result.length === 0) return res.status(400).json({ success: false, message: 'Team does not exist' });
        const query = `UPDATE teams SET name = '${name || result[0].name}', 
        league = '${league || result[0].league}', country = '${country || result[0].country}' WHERE team_id = ${id}`;
        await connectionDB.query(query, (err) => {
            if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
            return res.status(200).json({
                success: true,
                message: 'Team updated successfully'
            });
        });
    });
}

const deleteTeam = async (req, res) => {
    const { id } = req.params;
    const team = `SELECT * FROM teams WHERE team_id = ${id}`;
    await connectionDB.query(team, async (err, result) => {
        if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
        if (result.length === 0) return res.status(400).json({ success: false, message: 'Team does not exist' });
        const query = `DELETE FROM teams WHERE team_id = ${id}`;
        await connectionDB.query(query, (err) => {
            if (err) return res.status(500).json({ success: false, message: `Error checking: ${err}` });
            return res.status(200).json({
                success: true,
                message: 'Team deleted successfully'
            });
        });
    });
}

module.exports = {
    getTeams,
    getTeam,
    createTeam,
    updateTeam,
    deleteTeam
};