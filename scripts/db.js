const sqlite3 = require('sqlite3').verbose();
import path from 'path';
import fs from 'fs';

const db = new sqlite3.Database(path.join(process.cwd(), 'db', 'database.db'), sqlite3.OPEN_READWRITE, (err) => {
  if (err)
    return console.error(err.message);
  console.log('Connected to the in-memory SQLite database.');
});

const tables = `
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS assignments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    requested_at TIMESTAMP,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    typ TEXT NOT NULL,
    message TEXT NOT NULL,
    processed BOOL DEFAULT FALSE,
    finished BOOL DEFAULT FALSE,
    finished_at TIMESTAMP DEFAULT NULL,
    price FLOAT DEFAULT NULL
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

class Data {
  get() {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'db', 'database.json')).toString())
  }
  set(value) {
    let data = this.get()
    data.assignments.push(Object.assign({
      id: data.assignments.length,
      requested_at: 'TODO',
      processed: false,
      finished: false,
      finished_at: null,
      price: null
    }, value))

    fs.writeFileSync(path.join(process.cwd(), 'db', 'database.json'), JSON.stringify(data))
  }
}

let data = new Data();

export { db, setup_tables, data }