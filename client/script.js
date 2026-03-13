// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Connexion au serveur
    const socket = io();
    
    // Quand la connexion est établie
    socket.on('connect', () => {
        console.log('Connecté au serveur avec ID:', socket.id);
    });

});