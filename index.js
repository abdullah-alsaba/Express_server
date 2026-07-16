const express = require('express')

const app = express();

const port = process.env.Port || 8000;


app.get('/', (req, res) => {
    res.send('hello');
})
app.get('/user', (req, res) => {
    res.send('hello user');
})

app.listen(port, () => {
    console.log("server is running")
})