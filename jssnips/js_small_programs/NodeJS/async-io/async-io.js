var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
	if (err) {
		throw err;
	} else {
		console.log(data.spltest('\n').length - 1);
	}
});
