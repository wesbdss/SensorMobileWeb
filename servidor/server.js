const WebSocket = require('ws');
require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
// const wss = new WebSocket.Server({ url: "ws://" + process.env.MY_IP, port: 4001 });

// wss.on("open", () => { console.log("WebScoket Funcionando") })
// wss.on('connection', (ws) => {
//   ws.on('message', (message) => {
//     console.log(JSON.parse(message));
//   });
// });

app.use("/static", express.static('./static'))
app.use(cors())


const wss = new WebSocket.Server({ noServer: true });
wss.on('connection', socket => {
  socket.on('message', message => { console.log(JSON.parse(message)) });
});

app.get("/connection", (req, res, next) => {
  res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.get("/", (req, res, next) => {
  res.redirect('/connection')
})

const server = app.listen(process.env.PORT, () => { console.log("Servidor Startado") });

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, socket => {
    wss.emit('connection', socket, request);
  });
});