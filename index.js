const express = require('express')
var cors = require('cors')
const jobs = require('./jobs.json')
const cate = require('./category.json')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.send('Data loading !!!')
  })


app.get('/jobs', (req, res) => {
    res.send(jobs)
})

app.get('/cate', (req, res) => {
  res.send(cate)
})

app.get('/jobs/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log('id : ', id);
    const job = jobs.find(job => job.id === id) || {};
    res.send(job)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})