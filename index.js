const express = require('express');
const { connectToDatabase } = require('./config/database.config');
require('dotenv').config();

connectToDatabase()

const app = express();

app.use('/auth', require('./routers/user.router'));

app.listen(3001, ()=>{
    console.log('listening on port 3000');
});