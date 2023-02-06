const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "anurag",
  database: "hostelhq",
  password: "pFT5yRjnM3LdTLEuFDzscE6b2F4Abcsf",
  port: 5432,
  host: "dpg-cfeeiqun6mpu0ucm43u0-a.singapore-postgres.render.com",
  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
  ssl: true,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
