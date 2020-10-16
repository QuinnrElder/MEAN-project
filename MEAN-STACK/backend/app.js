const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*")
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Request-With, Content-Type, Accept")
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, PUT, OPTIONS")
  next()
})

app.post("/api/posts", (req, res, next) => {
  const post = req.body
  console.log(post)
  res.status(201).json({
    message: 'Post was added'
  })
})

app.get('/api/posts', (req, res, next) => {
  const posts = [{
    title: 'First server side post',
    content: 'Coming from server',
    id: "1",
  },
  {
    title: 'Second server side post',
    content: 'Coming from server',
    id: "2",
  }]
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  })
})

module.exports = app
