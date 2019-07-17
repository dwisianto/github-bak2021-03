/**
 * 
 */
 
'use strict'; 


/**
 * [] config
 */
const fs = require('fs');

let rawdata = fs.readFileSync('./_configs/student.json');  
let student = JSON.parse(rawdata);  
console.log(rawdata);
console.log(student);


/**
 * Util
 */
var util = require('./_helpers/util.js')
console.log( typeof util.underline );
console.log( typeof util.objRndKey );
console.log( typeof util.kemba );



/**
 * REST
 */
var path    = require('path');
var express = require('express');
var app = express();


// [] view engine setup
app.set('view engine', 'pug');
app.set('views', ['_servers/views/v1','_servers/views/v2']);


app.get('/', function (req, res) {
	res.render('homepage', {
		user : 'dsm'
		});
	} );

app.get('/hw', function (req, res) {
	res.render('hello', { title: 'Hello', message: 'Hello world, view!' })
	} );


// [] static files
app.use('/public1', express.static(path.join(__dirname,'_servers/publics/p01')));
app.use('/public2', express.static(path.join(__dirname,'_servers/publics/p02')));
//app.get('/', function (req, res) { res.send('Hello World'); res.sendfile('index.html'); });
    

// [] start the server
app.listen(3000, function() {
	console.log("Listening on port 3000!")
    } 
);
