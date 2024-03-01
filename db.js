const pg = require("pg");

const connectionString = "postgresql://username:password@localhost:5432/lunchly";

const db = new pg.Client({
  connectionString: connectionString
});

db.connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch(err => {
    console.error("Error connecting to database:", err);
  });

module.exports = db;
