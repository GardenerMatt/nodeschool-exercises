var http = require('http')
var map = require('through2-map')

var port = process.argv[2]

var server = http.createServer(function(req, res) {
	 // console.log('Client connected');
	 var upSize = req.pipe(map(function (chunk) {
		 return chunk.toString().toUpperCase()
	 }));
	 upSize.pipe(res)
});

server.listen(port, function() {
	 // console.log('Server bound to port ' + port);
});