var http = require('http')
var bl = require('bl')

var count = 0

var sites = [
	{
		url: process.argv[2]
	},
	{ 
		url: process.argv[3]
	},
	{
		url: process.argv[4]
	}
]

sites.forEach(function(site) {
	http.get(site.url, function callback (res) {
		res.pipe(bl(function (err, data){
			 if (err)
				return (err)
			count++
			site.response = data.toString();
			 if (count === 3)
				printContent ()
		}));
	});
});

function printContent() {
	sites.forEach(function(site) {
		console.log(site.response);
	});
};