const {Pool} = require('pg');
const database = new Pool ({
    host: "localhost",
    database: "coffee_shop",
    port: "5432",
    user: "admin",
    password: "admin"
})

exports = database;