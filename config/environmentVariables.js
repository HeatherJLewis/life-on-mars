const dotenv = require("dotenv");
const environment = dotenv.config();
if (environment.error) {
  throw environment.error;
}
const PORT = process.env.PORT;
const NASA_API_KEY = process.env.NASA_API_KEY;

module.exports = { PORT, NASA_API_KEY };
