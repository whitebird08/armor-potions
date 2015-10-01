var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var armor = require('./routes/armor')
var potions = require('./routes/potions')

app.use('/api/armor', armor);
app.use('/api/potions', potions)

app.listen(process.env.PORT || 8080);
console.log('Woot, server started');