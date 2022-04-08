const path = require('path');

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
        servers:[{
            url: 'https://soccer-api-arge.herokuapp.com/api/'
        }]
    },
    apis: [`${path.join(__dirname, '../routes/*.js')}`]
};

module.exports = swg;