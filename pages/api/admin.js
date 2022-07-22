const fs = require('fs')
import { db, setup_tables, data } from '../../scripts/db'
import path from 'path'

setup_tables()

export default function handler(req, res) {
  if (req.method == 'GET') {
    res.setHeader("Content-Type", "text/html")
    res.send(`
      <form action="/api/admin" method="POST">
        <input type="password" name="password" autofocus />
      </form>
    `)
  } else if (req.method == 'POST' && req.body.password == 'testing') {
    // db.all('SELECT * FROM assignments', (err, rows) => {
    //   if (err) return res.status(500).json({ message: err.message })

      res.setHeader("Content-Type", "text/html")

      // res.send(fs.readFileSync(path.join(process.cwd(), 'scripts', 'admin.html')).toString().replaceAll('`{{data}}`', JSON.stringify(rows)))
      res.send(fs.readFileSync(path.join(process.cwd(), 'scripts', 'admin.html')).toString().replaceAll('`{{data}}`', JSON.stringify(data.get().assignments)));

    // })

  }
}