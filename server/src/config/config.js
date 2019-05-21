module.exports = {
  port: process.env.PORT || 8086,
  db: {
    database: process.env.DB_NAME || 'posttracker',
    user: process.env.DB_USER || 'posttracker',
    password: process.env.DB_PASS || 'posttracker',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: './posttracker.sqlite'
    }
  }
}
