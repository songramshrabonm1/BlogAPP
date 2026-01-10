# Backend 

1. npm init --y 
2. npm i express mongoose dotenv cors nodemailer cookie-parser bcrypt
3. npm i --save-dev nodemon
4. folder create
``` 
    1. config folder 
        db.js ( mongodb connect করবো )
    2. models folder ( এই ফোল্ডার এ সব mongoose model গুলো create করে রাখবো like  )
        user.model.js (user এর structure টা কেমন এই code গুলো লিখি )
     3. Routes
     4. Controllers 
     5. Middleware       
```
5. package.json ফাইলে গিয়ে scripts গিয়ে এভাবে করবো প্রজেক্ট রান করার জন্য 

```js
 "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```
6. utils folder create করবো যেখানে javascript এর function গুলো রাখার ছেষ্ঠা করবো । 


7. index.js file create করবো । 

```js
const express = require('express') ; 
const app = express() ; 
const connectDb = require('./config/db') ; 
const dotenv = require('dotenv') ; 
const cors = require('cors') ; 
const cookieparser = require('cookie-parser') ; 
dotenv.config() ; 

const port = process.env.PORT || 5000 ; 


// MIDDLEWARE 
app.use(express.json()); 
app.use(express.urlEncoded({extended: true})) ; 
app.use(cookieparser()) ; 
app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true,
}))



app.listen(port , async(){
    await connectDb() ; 
    console.log(`JServer is running at the server -  ${port}`);
})
```

8. model folder এর ভিতরে এখন User.model.js file create করবো । 

