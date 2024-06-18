const express = require('express');
const pageroute = require('./src/routes/pageroutes');

const app = express();

app.use('/',pageroute)


app.listen(3003, () => {
    console.log("The server is starting")
})