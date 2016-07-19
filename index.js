// get the modules
var express = require('express');
var bodyparser = require('body-parser');


// setup port
var port = process.env.PORT || 3000;


// create app
var app = express();

// set routes


// set middleware



// set static routes
app.use('/static',express.static(__dirname + '/public'));

// view engine
app.set('view engine', 'ejs');

// implement api
app.get("/", function (req, res) {
	// body...
	res.render('index');
})

// run the app
app.listen(port, function(){
	console.log('app listening @ port: ' + port);
});
