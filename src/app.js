const express = require('express');
const cors = require('cors');
const responseTime = require('response-time');
require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(responseTime());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/player', require('./routes/player'));
app.use('/api/team', require('./routes/team'));

app.listen(app.get('port'), () => {
    console.log(`Server is listen in port: ${app.get('port')}`);
});