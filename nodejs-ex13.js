var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function(req, res) {
	 var parsedUrl = url.parse(req.url, true)
	 var dateGet = url.parse(req.url, true).query.iso
	 var d = new Date(dateGet)
	 var dateOut
	 // console.log('Client connected');
	 if (parsedUrl.pathname === '/api/parsetime') {
		 dateOut = JSON.stringify({'hour': d.getHours(), 'minute': d.getMinutes(), 'second': d.getSeconds()})
	 }
	 if (parsedUrl.pathname === '/api/unixtime') {
		 dateOut = JSON.stringify({"unixtime":d.getTime()})
	 }
	 res.writeHead(200, {'Content-Type': 'application/json'})
	 res.end(dateOut)
});

server.listen(port, function() {
	 // console.log('Server bound to port ' + port);
});