import express from 'express';
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

// POST http://localhost:4444/auth/login
// По таком запросу будет дан ответ содержащий вложенный JSON
app.post('/auth/login', (req, res) =>{
  // req.body
  const token = jwt.sign({
    email: req.body.email,
    fullname: "Петя Жабкин"
  },
  'code phrase')

  res.json({
    success: true,
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