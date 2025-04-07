import { io } from 'socket.io-client';

const SOCKET_URL = "https://fly-patient-firefly-4760-production.up.railway.app"

export const socket = io('/', {
  path: '/socket.io',
  transports: ['websocket'],
});


export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

// Socket event listeners
socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('error', (error) => {
  console.error('Socket error:', error);
});
