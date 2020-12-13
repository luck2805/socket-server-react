// Servidor express
const express = require('express');
const server = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./scokets');


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.server = server.createServer(this.app);

        // Configuraciones de sockets
        this.io = socketio(this.server, { /* */ });
    }

    middleware() {
        this.app.use(express.static( path.resolve(__dirname, '../public')));
    }

    configurarSockets() {
        new Sockets(this.io);
    }

    execute() {

        this.middleware();
        this.configurarSockets();

        this.server.listen( this.port, () => {
            console.log(`Server corriendo en puerto:`, this.port);
        });
    }

}

module.exports = Server;