var config = {};

config.db = {};
// the URL shortening host - shortened URLs will be this + base58 ID
// i.e.: http://localhost:3000/3Ys
config.webhost = 'http://0.0.0.0:4555/';

// your MongoDB host and database name
config.db.host = 'localhost';
config.db.name = 'URLKeys';

module.exports = config;

