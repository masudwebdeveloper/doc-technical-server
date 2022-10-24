const express = require('express')
const app = express();
const cors = require('cors')

const port = process.env.port || 5000

app.get(cors())

app.get('/', (req, res) => {
   res.send('doc-technical server is running')
})

app.listen(port, () => {
   console.log(`doc server is runing ${port}`);
})