import { db, setup_tables } from '../../scripts/db'

setup_tables()

export default function handler(req, res) {
  if (req.method == 'GET') {
    res.setHeader("Content-Type", "text/html")
    res.send(`
      <form action="/api/admin" method="POST">
        <input type="password" name="password" />
      </form>
    `)
  } else if (req.method == 'POST' && req.body.password == 'testing') {
    res.send('logged in')
  }

    // if (req.params.)
}