const socket = io('/');

socket.emit('join-room', 1);

socket.on('user-connected', userId => {
    
}) 




