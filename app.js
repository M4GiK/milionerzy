/**
 * Created by m4gik on 6/13/17.
 */
var express = require('express');
var app = express();
app.use(express.static(__dirname)); //__dir and not _dir
var port = 8000; // you can use any port
app.listen(port);

console.log('Server running at http://127.0.0.1:' + port + '/');
