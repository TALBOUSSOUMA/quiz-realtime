const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);  // Initialisation de socket.io sur le serveur

// Sert les fichiers du client
app.use(express.static(path.join(__dirname, '..', 'client')));

io.on('connection', (socket) => {
    console.log('Un joueur s\'est connecté:', socket.id);
    
    socket.on('disconnect', () => {
        console.log('Joueur déconnecté:', socket.id);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});