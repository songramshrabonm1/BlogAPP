const jwt = require('jsonwebtoken') ; 

const getRefreshToken = (payload) =>{ 
  return jwt.sign(payload, process.env.REFRESS_SECRET_KEY, {
    expiresIn: process.env.REFRES_TOKEN_TIME,
  });
}

const getAccessToken = (payload)=>{
  return jwt.sign(payload, process.env.Access_secret_key, {
    expiresIn: process.env.ACESS_TOKEN_TIME,
  });
}

const validRefreshToekn = (refreshToken) =>{
  return jwt.verify(refreshToken , process.env.REFRESS_SECRET_KEY) ; 
}

const getCookiePayload = () =>{

  const CookiePayload = {
    httpOnly : true , 
    secure : false,
    sameSite : 'lax' ,
    maxAge : parseInt(process.env.MAX_AGE) * 24 *60*60*1000
  }
  return CookiePayload; 

}

module.exports = {
  getRefreshToken,
  getAccessToken,
  getCookiePayload,
  validRefreshToekn,
}; 


