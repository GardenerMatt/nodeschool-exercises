var http = require('http')
var bl = require('bl')

var content = ["string1", "string2", "string3"]
var count = 0

function printContent() {
	 for (var i = 0; i < content.length; i++) {
		 console.log(content[i]);
	};
};

for (var i = 2; i < 5; i++) {
	 var urlNum = i - 2;
	 fetchData (urlNum, process.argv[i])
};

function fetchData (urlNum, url) {
     http.get(url, function callback (res) {
		res.pipe(bl(function (err, data){
			 if (err)
				return (err)
			 printResults(urlNum, data)
			}));
	});

};

function printResults (urlNum, data) {
	count++
	content[urlNum] = data.toString()
	if (count === 3)
		printContent ()
};