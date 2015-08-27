var express = require('express'),
    app = express();

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html'); 
});

app.use('/js', express.static(__dirname + '/app/js'));
app.use('/styles', express.static(__dirname + '/app/styles'));
app.use('/views', express.static(__dirname + '/app/views'));
app.use('/fonts', express.static(__dirname + '/app/fonts'));
app.use('/images', express.static(__dirname + '/app/images'));
app.use('/icons', express.static(__dirname + '/app/icons'));

app.listen(3000, function() {
   console.log('app running on port 3000'); 
});