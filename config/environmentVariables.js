const dotenv = require("dotenv"); // mockNo1 instance - test two - mockNo2 instance
console.log("In Code", dotenv.version);
const environment = dotenv.config();
if (environment.error) {
  throw environment.error;
}
const PORT = process.env.PORT;
const NASA_API_KEY = process.env.NASA_API_KEY;

module.exports = { PORT, NASA_API_KEY };
