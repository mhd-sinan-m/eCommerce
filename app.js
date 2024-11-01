const express = require("express");
const session = require('express-session');

require('dotenv').config()
const dbConnect = require("./config/connect")
const app = express()

const port = process.env.PORT

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))


app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// ROUTES
app.use('/', require('./routes/client'))
app.use('/admin', require('./routes/admin'))

dbConnect().then(() => {
    app.listen(port, () => {
        console.log('server running ', port)
    })
}).catch((err) => {
    console.error('connection failed', err)
}); 
