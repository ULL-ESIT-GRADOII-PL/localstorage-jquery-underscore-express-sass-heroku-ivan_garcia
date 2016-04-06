var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 5000));

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('ejs').delimiter = '$';

app.use(expressLayouts);

app.use(express.static(__dirname + '/'));

app.get('/', function (request, response) {
    response.render('index', { title: 'Comma Separated Value Analyzer' });
});

app.get('', function (request, response) {

});

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
});
module.exports = app;
