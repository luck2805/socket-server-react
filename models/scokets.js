
class Sockets {

    constructor( io) {
        this.io = io
        this.socketsEvents();
    }

    socketsEvents() {
        this.io.on('connection', (socket) => {

            socket.on('mensaje-to-server', (data) => {
                console.log(data);

                this.io.emit('mensaje-to-client', data)
                socket.emit('mensaje-to-client', { texto: `[PROIETARIO] - ${data.texto}` })

            })

        });
    }
}

module.exports = Sockets;