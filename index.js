const express = require('express')
const app = express()
const PORT = 2000
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).send(`<h2>JC BANDUNG</h2>`)
})


app.listen(PORT, () => console.log("Server Running:", PORT))