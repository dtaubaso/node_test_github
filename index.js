const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    
  var variable = `${process.env.MENSAJE}, como estas?`;
  res.send(variable);
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})