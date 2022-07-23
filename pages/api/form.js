// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { db, setup_tables, data } from '../../scripts/db'

// setup_tables()

export default function handler(req, res) {
  if (req.method == 'POST') {
    // db.run('INSERT INTO assignments (requested_at, name, email, typ, message) VALUES (datetime("now", "+2 hours"), ?, ?, ?, ?)', [req.body.name, req.body.email, req.body.typ, req.body.message], (err) => {
    //   if (err) res.status(500).json({ err: err.message })
    //   else res.redirect('https://formsubmit.co/0da830855b437249ecd6df8913af57a0')
    // })

    // data.set({
    //   name: req.body.name,
    //   email: req.body.email,
    //   typ: req.body.typ,
    //   message: req.body.message
    // })

    fetch (process.env.BACKEND_URL + '/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    })
      .then(() => {
        res.redirect('https://formsubmit.co/0da830855b437249ecd6df8913af57a0')
      })
      .catch(err => {
        console.error(err.message)
        res.status(500).send('Error has been detected.')
      })
  }
}
