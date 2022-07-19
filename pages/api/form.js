// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db, setup_tables } from '../../scripts/db'

setup_tables()

export default function handler(req, res) {
  if (req.method == 'POST') {
    db.run('INSERT INTO assignments (name, email, typ, message) VALUES (?, ?, ?, ?)', [req.body.name, req.body.email, req.body.typ, req.body.message], (err) => {
      if (err) res.status(500).json({ err: err.message })
      else res.redirect('https://formsubmit.co/0da830855b437249ecd6df8913af57a0')
    })
  }
}
