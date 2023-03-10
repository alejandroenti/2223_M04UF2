const http = require('http');

http.createServer(function (request, response) {

	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
	response.setHeader("Access-Control-Allow-Max-Age", "2592000");

	if (request.method == "POST") {
		let data = "";

		request.on('data', dataChunk => data += dataChunk);
		request.on('end', () => {
			console.log(data);
			response.end();
		});

		return;
	}
	
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

	response.write(itemsJson);
	response.end();

}).listen(8080);
