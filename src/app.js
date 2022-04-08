const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swg = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Soccer API',
            version: '1.0.0',
            description: 'Test API for Soccer',
            contact: {
                name: 'Arge Niño',
                url: 'https://.argenh.github.io/',
                email: 'darley1054@gmail.com'
            },
            license: {
                name: 'MIT',
                url: 'https://opensource.org/licenses/MIT'
            }
        },
        servers: [{
            url: 'https://soccer-api-arge.herokuapp.com/api/'
        }]
    },
    apis: [`${path.join(__dirname, './routes/*.js')}`]
};

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swg)));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/player', require('./routes/player'));
app.use('/api/team', require('./routes/team'));

app.listen(app.get('port'), () => {
    console.log(`Server is listen in port: ${app.get('port')}`);
});