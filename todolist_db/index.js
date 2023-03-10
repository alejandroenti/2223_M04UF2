const http = require('http');

http.createServer(function (request, response) {
	
	let items = [
		{
			id_item: 1,
			item: "Comprar patatas"
		},
		{
			id_item: 2,
			item: "Hacer deberes Rafa"
		},
		{
			id_item: 3,
			item: "Destruir Naughty Dog"
		}
	];

	let itemsJson = JSON.stringify(items);

	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
	response.setHeader("Access-Control-Allow-Max-Age", "2592000");
	response.write(itemsJson);
	response.end();

}).listen(8080);
