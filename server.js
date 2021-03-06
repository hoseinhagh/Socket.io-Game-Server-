const io = require('socket.io')(process.env.PORT || 3000);

console.log('server started');

let playerCount = 0;

io.on('connection', (socket) => {
    console.log('client connected, spawning');
    socket.broadcast.emit('spawn');
    playerCount++;

    for (i = 0; i < playerCount; i++) {
        socket.emit('spawn');
        console.log('spending spawn to new player');
    }

    socket.on('move', (data) => {
        console.log('client moved');
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
        playerCount--;
    })
})