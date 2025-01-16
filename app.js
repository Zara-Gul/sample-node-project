/*

GEREKLİ PAKETLER YÜKLENİYOR...

*/
/*
var http = require('http');
var express = require('express');

var app = express();

//app.set('port', process.env.PORT || 3000); // GİRİŞ PORTU AYARLANDI
app.set('port', process.env.PORT || (process.env.NODE_ENV === 'test' ? 3002 : 3006)); // Different port for testing

app.set('views', __dirname + '/app/server/views'); // VIEW KLASÖRÜ TANITILDI
app.set('view engine', 'ejs'); // VIEW ENGINE AYARLANDI
app.use(express.static(__dirname + '/app/public')); // KULLANICILAR TARAFINDAN ERİŞİLEBİLEN KLASÖR TANIMLANDI

require('./app/routes')(app); // ROUTE DOSYASI ÇAĞIRILDI

module.exports = app; // Export the app object


// HTTP SERVER OLUŞTURULDU


http.createServer(app).listen(app.get('port'), function(){
	console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
});

//new changes

let server;

if (process.env.NODE_ENV !== 'test') {
  server = http.createServer(app).listen(app.get('port'), function() {
    console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
  });
}

// Export the app for testing purposes
if (process.env.NODE_ENV === 'test') {
  module.exports = app;
}

// Close the server after tests if running in 'test' environment
if (server && process.env.NODE_ENV === 'test') {
  afterAll(() => {
    server.close(); // Close the server after tests complete
  });
}
*/
//second
/*
var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || (process.env.NODE_ENV === 'test' ? 3002 : 3006)); // Different port for testing

app.set('views', __dirname + '/app/server/views'); 
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + '/app/public')); 

require('./app/routes')(app);

let server;

if (process.env.NODE_ENV !== 'test') {
  server = http.createServer(app).listen(app.get('port'), function() {
    console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
  });
}

module.exports = app;

if (server && process.env.NODE_ENV === 'test') {
  afterAll(() => {
    server.close(); // Close the server after tests complete
  });
}
*/

var http = require('http');
var express = require('express');

var app = express();

// Set the port based on environment variables
app.set('port', process.env.PORT || (process.env.NODE_ENV === 'test' ? 3002 : 3006)); // Different port for testing

app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/app/public'));

// Include the route file
require('./app/routes')(app);

let server;

// Only run the server if not in 'test' environment
if (process.env.NODE_ENV !== 'test') {
  server = http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {  // Binding to 0.0.0.0 for external access
    console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
  });
}

// Export the app for testing purposes
module.exports = app;

// Close the server after tests complete in 'test' environment
if (server && process.env.NODE_ENV === 'test') {
  afterAll(() => {
    server.close();
  });
}

