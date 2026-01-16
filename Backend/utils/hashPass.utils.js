const bcrypt = require('bcrypt') ; 
const HashPasswordGen = async(password)=>{
    return await bcrypt.hash(password , Number(process.env.SALT));
}
const CompareHashPassword = async(password , HashPassword) =>{
    return await bcrypt.compare(password, HashPassword); 
}

module.exports = {HashPasswordGen , CompareHashPassword} ; 