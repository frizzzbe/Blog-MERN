import express from 'express';
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET http://localhost:4444/posts/alan
app.get('/posts/alan', (req, res) => {
  res.send({
    name: 'Alan',
    surname: 'walker',
  })
})

// POST http://localhost:4444/auth/login
app.post('/auth/login', (req, res) =>{
  const token = jwt.sign({
    email: req.body.email,
    fullname: "Петя Жабкин"
  },
  'key fdlghfkhkgkd')
  res.json({
    success: false,
    count: 42,
    token
  })
})

app.listen(4444, (err) => {
  if (err) {
    throw console.error(err)
  }
  console.log('Server is OK!')
})