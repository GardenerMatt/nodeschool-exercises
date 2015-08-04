var bring = require('./nodejs-ex6a.js')

var cb = function (err, data) {
	if (err)
		return console.log('An error has occured. You fail.')
	data.forEach(function(item) {
		console.log(item)
	})
}

bring(process.argv[2], process.argv[3], cb)