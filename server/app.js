const express = require('express')
const routerUser = require('./routes/r.user')
const routerArticle = require('./routes/r.article')
const mongoose = require('mongoose')
const morgan = require('morgan')
const multer = require('multer')

require('dotenv').config()
mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@ds257589.mlab.com:57589/hacktivpress`)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connect to database !!')
})


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use('/api/users', routerUser)

app.listen(3000, () => {
  console.log('App listening on port 3000')
})