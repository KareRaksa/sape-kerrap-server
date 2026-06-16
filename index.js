const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('Player terhubung: ' + socket.id);
  socket.on('move', (data) => {
    socket.broadcast.emit('move', data);
  });
});

http.listen(process.env.PORT || 3000);
