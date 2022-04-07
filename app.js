const express = require('express');
const cors = require('cors');
const { application } = require('express');
require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.listen(app.get('port'), () => {
    console.log(`Server is listen in port: ${app.get('port')}`);
});