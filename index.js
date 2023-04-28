import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(4444, (err) => {
  if (err) {
    throw console.error(err)
  }
  console.log('Server is OK!')
})