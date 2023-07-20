require('dotenv').config();
const express = require('express');
const home = require('./Controllers/userControllers');

const connectDB = require('./mongodbConnect.js')

const app = express();

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes = require('./routes/userRoute.js');

app.use('/', userRoutes)

module.exports = app