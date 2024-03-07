const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render(__dirname + "/view/index.ejs");
})    

app.listen(3000)