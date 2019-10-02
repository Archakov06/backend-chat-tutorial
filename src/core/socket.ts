import socket from 'socket.io';
import http from 'http';

export default (http: http.Server) => {
  const io = socket(http);

  io.on('connection', function(socket: any) {
    socket.on('DIALOGS:JOIN', (dialogId: string) => {
      socket.dialogId = dialogId;
      socket.join(dialogId);
    });
    socket.on('DIALOGS:TYPING', (obj: any) => {
      socket.broadcast.emit('DIALOGS:TYPING', obj);
    });
  });

  return io;
};
