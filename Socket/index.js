const http = require("http");
const io = require("socket.io")();
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
	fs.readFile("index.html", (err, data) => {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		res.end(data);
	});
});

io.attach(server);

io.on("connection", (socket) => {
	console.log("User connected");

	socket.use((data_package, next) => {
		const [eventName, payload, callback] = data_package;
		console.log("1 middleware");
		console.log("event happens", eventName);
		console.log("payload", payload);
		console.log("and callback", callback);
		console.log("==================================");
		next();
	});

	socket.use(([eventName, payload, callback], next) => {
		console.log("2 middleware");
		console.log("same event here", eventName);
		console.log("same payload", payload);
		console.log("and same callback", callback);
		console.log("==================================");
		next();
	});

	socket.use(([eventName, payload, callback], next) => {
		console.log("3 middleware");
		console.log("same event here", eventName);
		console.log("same payload", payload);
		console.log("and same callback", callback);
		console.log("==================================");

		callback(`${payload}, welcome to socket test page!`);
	});
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
