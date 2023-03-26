const { Pool } = require("pg");
require("dotenv").config();
// client
// pool

const pool = new Pool ({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
});


module.exports = pool;