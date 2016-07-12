var express = require('express'),
    helmet = require('helmet'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var config = require('./config/base');

mongoose.connect(config.database);

var db = mongoose.connection;
var app = express();

var clientRoutes = require('./routes/client'),
    apiRoutes = require('./routes/api'),
    Url = require('./models/url');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB')
});

app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', clientRoutes);
app.use('/api', apiRoutes);

app.listen(config.port, function(){
    console.log('Listening on ' + config.port)
})
