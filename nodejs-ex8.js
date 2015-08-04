var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function callback (res) {
	res.pipe(bl(function (err, data){
		 if (err)
			return (err)
		 console.log(data.length)
		 console.log(data.toString());
	}));
});