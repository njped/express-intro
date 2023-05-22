const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
  res.end()
})

app.get('/about', (req, res) => {
  res.send('My first express app')
  res.end()
})

app.get('/time', (req, res) => {
  res.send(`Current time is: ${getTime()}`)
  res.end()
})

app.get('/file', (req, res) => {
  res.send(`Data File: ${getFile()}`)
  res.end()
})

app.listen(3000, () => {
  console.log(`listening on port ${port}`)
})

function getTime() {
  const current = new Date()
  return current.toLocaleString()
}

function getFile() {
  fs.createReadStream('data.txt')
}