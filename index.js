const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    
  return res.send("BUEN DIA");
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})