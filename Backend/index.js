const express = require('express') ; 
const app = express() ; 
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv')
const cors = require('cors') ; 
const connectDb = require('./config/db')

dotenv.config() ; 
const port  = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json()) ; 
app.use(cookieParser());
app.use(express.urlencoded({extended: true})) ; 



app.listen(port , async() => {
  await connectDb() ; 
  console.log(`Server is running at the server - ${port}`);
});

