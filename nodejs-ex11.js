var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var file = process.argv[3]

var server = http.createServer(function(req, res) {
	 // console.log('Client connected');
	 var contents = fs.createReadStream(file)
	 contents.pipe(res)
});

server.listen(port, function() {
	 // console.log('Server bound to port ' + port);
});