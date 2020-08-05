const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const bodyParser = require("body-parser");

//Middleware
app.use(bodyParser.json());

//Import route
const postRoute = require('./routes/posts');

app.use("/posts",postRoute);
//Routes
app.get("/",(req,res)=>{
  res.send('we are on home');
})

// Connect to DB after setting up DB with docker
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected !!");
  }
);
//Listen
app.listen(3001);