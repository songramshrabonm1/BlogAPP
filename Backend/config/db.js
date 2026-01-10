const mongoose = require('mongoose') ; 
const connectDb = async (url) =>{
    try{
        const connection = await mongoose.connect(process.env.MongoDb_URL);
        console.log("Connected Mongoose....")
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDb; 