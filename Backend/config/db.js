const mongoose = require('mongoose') ; 
const connectDb = async () =>{
    try{
        const connection = await mongoose.connect(process.env.MongoDb_URL);
        console.log("Connected Mongoose....")
    }catch(error){
        console.error(error);
    }
}
module.exports = connectDb; 