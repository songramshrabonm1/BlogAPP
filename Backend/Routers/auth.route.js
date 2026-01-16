const express = require('express') ; 
const { signUp, signIn, sendOTP, verfiyOtp, resetOtp } = require('../Controllers/auth.controller');
const authRouter = express.Router() ;

authRouter.post("/signUp", signUp);
authRouter.post("/signIn", signIn);
authRouter.post('/forgetPassWord' , sendOTP); 
authRouter.post('/verifyOtp' , verfiyOtp);
authRouter.post('/resetPassword' , resetOtp) ;  


module.exports = authRouter;