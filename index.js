const { createServer } = require('./createServer.js')

const PORT = 3000;

const server = createServer();

server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});