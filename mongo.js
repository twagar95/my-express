var express = require('express')
var app = express()

// dburl to a mongodb server hosted in the cloud (i.e., mongolab)
var dburl = 'mongodb://github:1234@ds041871.mongolab.com:41871/github'

// get db
var db = require('monk')(dburl)

// set the database
app.db = db

// use jade as the view engine
app.set('view engine', 'jade');

// set where the static contents are (e.g., css, js)
app.use(express.static(__dirname + '/public'));


require('./mongo/listEvents')(app)
require('./mongo/viewEvents')(app)
require('./mongo/listRepos')(app)
require('./mongo/viewRepos')(app)

app.set('port', (process.env.PORT || 3000))

var server = app.listen(process.env.port || app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port

    console.log('App listening at http://%s:%s', host, port)
});
