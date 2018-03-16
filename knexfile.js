const path = require('path');

console.log(path.join(__dirname, '/database/migrations'));

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'redoku_development',
      port: 5432,
    },
    migrations: {
      directory: path.join(__dirname, '/database/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds')
    }
  }
}