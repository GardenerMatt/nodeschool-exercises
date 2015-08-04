var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, cb) {
	ext = "." + ext;
	var array = []
	
	fs.readdir(dir, function callback (err, list) {
		if (err)
			return cb(err)
		list.forEach(function(item) {
		  if (path.extname(item) === ext)
			 array.push(item)
		 });
		 cb(null, array)
	});
}

