const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require("path")

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8000

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({ entended: true }))

app.set('view engine', "ejs")
//app.set("views", path.resolve(__dirname,"views/ejs"))

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/add-user',(req,res) => {
    res.render('add_users')
})

app.get('/update-user',(req,res) => {
    res.render('update_users')
})

app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)})