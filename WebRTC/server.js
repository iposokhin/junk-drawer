const express = require( 'express' ),
      path = require( 'path' ),
      socketIO = require( 'socket.io' ),
      http = require( 'http' ),

      app = express(),

      server = http.createServer( app ),
      io = socketIO( server ),
      port = process.env.NODE_PORT || 3000,
      ip = process.env.NODE_IP || '127.0.0.1',
      app_root = __dirname;

app.set( 'x-powered-by', false );
app.use( express.static( path.join( app_root, 'public/' ) ) );

io.sockets.on( 'connection', function ( socket ) {
  socket.on( 'message', function ( message ) {
    console.log( message.type );
    socket.broadcast.emit( 'message', message );
  } );
} );

server.listen( port, ip, () => console.log(`ip - ${ ip }, port - ${ port }` ) );
