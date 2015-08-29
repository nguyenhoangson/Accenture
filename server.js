(function(){

	var express = require('express');
	var app = express();

	app	
		.get('/')
		.listen(8080);
})();