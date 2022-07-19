const fs = require('fs')
import { db, setup_tables } from '../../scripts/db'

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
    db.all('SELECT name, email, typ, message FROM assignments', (err, rows) => {
      if (err) return res.status(500).json({ message: err.message })

      res.setHeader("Content-Type", "text/html")

      let ths = rows.length > 0 ? `<tr>${ Object.keys(rows[0]).map(e => `<th>${e}</th>`).join('\n') }</tr>` : ''
      let tds = rows.map(e => `<tr>${ Object.values(e).map(i => `<td>${i}</td>`).join('\n') }</tr>`).join('\n')

      res.send(fs.readFileSync('./scripts/admin.html').toString().replace('{{data}}', ths + tds))
    
    })

  }
}