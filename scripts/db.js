const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err)
      return console.error(err.message);
  console.log('Connected to the in-memory SQLite database.');
});

const tables = `
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS "assignments" (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    typ TEXT NOT NULL,
    message TEXT NOT NULL
  )
`

function setup_tables() {
    db.serialize(() => {
        for (var command of tables.split(';')) {
            db.run(command, (err) => {
                if (err) console.error(`Error at ${command}: `, err);
            });
        }
        console.log('- Created tables successfully!\n');
    });
}

export { db, setup_tables }