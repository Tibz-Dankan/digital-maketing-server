require("dotenv").config();
const pg = require("pg");
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const dbStringObject = {
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
};

const db = new pg.Client(dbStringObject);
db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Database successfully connected!");
  }
});

module.exports = db;