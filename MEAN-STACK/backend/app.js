const express = require('express')

const app = express()

app.use('/api/posts', (req, res, next) => {
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
    message: 'Posts fetched succesfully',
    posts: posts
  })
})

module.exports = app
