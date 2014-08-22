var app = require('./server-config.js');

var port = server.env.PORT || 4568;

app.listen(port);

console.log('Server now listening on port ' + port);
