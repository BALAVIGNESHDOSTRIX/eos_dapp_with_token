const express = require('express')
const morgan = require('morgan')
const hbs = require('hbs')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const expressHbs = require('express-handlebars')
const mainRouter = require('./routes/main')
const router_dapp = require('./routes/dapp_router')

const app = express()

app.engine('.hbs',expressHbs({defaultLayout:'layout',extname:'.hbs'}))

app.set('view engine','hbs')
app.use(express.static(__dirname + "/views"))
app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use('/',mainRouter);
app.use('/token',router_dapp);

app.listen(1997,(err) =>{
    if(err) console.log("The server is not able to run")
    console.log(`The Server is Successfully running at the port ${1997}.`)
})
