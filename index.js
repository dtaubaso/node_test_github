const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    
  res.writeHead(200, { 'Content-Type':'text/html'});
  res.end("<img src='https://i.imgur.com/ci0KxqM.png'>");
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})