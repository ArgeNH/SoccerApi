const cors = require('cors');
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const swgOptions = require('./helper/swg');

const app = express();

//PORT
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swgOptions)));

//Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/player', require('./routes/player'));
app.use('/api/team', require('./routes/team'));

app.listen(app.get('port'), () => {
    console.log(`Server is listen in port: ${app.get('port')}`);
});