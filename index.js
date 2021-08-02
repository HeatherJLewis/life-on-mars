const { createServer } = require("./createServer.js");
const { PORT } = require("./config/environmentVariables.js");

const server = createServer();

server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
