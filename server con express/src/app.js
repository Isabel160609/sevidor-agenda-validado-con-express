const express = require('express');
const morgan = require('morgan')
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(cors());
app.use(morgan('dev'));
//para que pueda leer json
app.use(express.json());
//para que lea lo q viene de un formulario html
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/persona.routes'))

module.exports = app;