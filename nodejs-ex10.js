var net = require('net')
var strftime = require('strftime')

var port = process.argv[2]

var server = net.createServer(function(socket) {
	 // console.log('Client connected');
	 socket.write(strftime('%Y\-%m\-%d %H\:%M\r\n'));
	 socket.end()
});

server.listen(port, function() {
	// console.log('Server bound to port ' + port);
});