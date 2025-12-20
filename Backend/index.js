const express = require('express') ; 
const app = express() ; 
const dotenv = require('dotenv')
const cors = require('cors') ; 


// middleware
app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);
app.use(express.json()) ; 
app.use(express.urlencoded({extended: true})) ; 




dotenv.config() ; 
const PORT = process.env.port || 5000;