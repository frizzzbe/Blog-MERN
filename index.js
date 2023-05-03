import express from 'express';
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts', (req, res) => {
  res.send({
    name: 'Alan',
    surname: 'walker',
    d_Size: '16sm'
  })
})

// POST http://localhost:4444/auth/login
// По таком запросу будет дан ответ содержащий вложенный JSON
app.post('/auth/login', (req, res) =>{
  const token = jwt.sign({
    email: req.body.email,
    fullname: "Петя Жабкин"
  },
  'кодовая фраза для шифровки сообщения')
  res.json({
    success: false,
    count: 42,
    token
  })
})

app.listen(4444, (err) => {
  if (err) {
    console.log('error ')
    throw console.error(err)
  }
  console.log('Server is OK!')
})