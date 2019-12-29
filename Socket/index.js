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

	socket.on("hello", (data, callback) => {
		callback("Hello " + data);
	});
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
