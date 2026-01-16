const  User  = require("../models/user.model");
const { sendOtpEmail } = require("../utils/emaill.utils");
const { errorMessage } = require("../utils/error.utils");
const { HashPasswordGen, CompareHashPassword } = require("../utils/hashPass.utils");
const { getRefreshToken, getAccessToken, getCookiePayload, validRefreshToekn } = require("../utils/token.utils");

const  signUp = async( req, res , next) =>{

try{
  const {UserName , email , password} = req.body ; 
  if(!UserName || !email || !password || password === ""  || email === ""|| UserName === "" ){
    // If Data missing status code will be 400
    return next(errorMessage(400, 'All Fields Are Required' , false)) ; 
  }
  const ExistUser = await User.findOne({email}) ; 
  if(ExistUser){
    // if Data Already Exist Status Code will be 409
    return next(errorMessage(409 , 'Already Exist' , false)); 
  }
  const HashPassword = await HashPasswordGen(password) ; 
  const NewUser = await User.create({
    UserName , 
    email , 
    password : HashPassword 
  })

  const payload = {
    userId : NewUser._id, 
    email : NewUser.email 
  }

//   RefreshToken যার মেয়াদ বেশি হয়ে থাকে । এবং যা ডাটাবেস এ ও সেইভ থাকে 
  const refreshToken =  getRefreshToken(payload) ; 
//   AccessToken যার মেয়াদ RefreshToken এর থেকে কম থাকে । এইটা ডাটাবেস এ সেইভ থাকে না । 
  const accessToken =  getAccessToken({userId : NewUser._id}) ; 
  const cookieOption = getCookiePayload()

  
  await User.findByIdAndUpdate(NewUser._id, {
    $push: {
      refreshToken: {
        token: refreshToken,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    },
  });
  
  res.cookie('accessToken' , accessToken, cookieOption) ; 
  res.cookie('refreshToken' , refreshToken , cookieOption) ; 

  return await res
//   201 tokhon i  দিবো যখন successfully কোন কিছু create হয় । 
    .status(201)
    .json({
      message: "User CREATE SUCESSFULLY",
      status: true,
      status_code: 201,
    });

}catch(error){
  // next(errorMessage(500, 'Internal Server Error' , false)) amra ekhane eita use korbo na karon
  /*
errorMessage() ব্যবহার করা হয় তখন, যখন তুমি নিজে থেকে নতুন error তৈরি করছো
 next(error) ব্যবহার করা হয় তখন, যখন error নিজে থেকেই এসেছে
 original error destroy hoye jabe 
    */
   next(error) ; 
}
}


const signIn = async(req, res, next)=>{
    try{
      const { email, password } = req.body;
      if (!email || !password || email === "" || password === "") {
        return next(errorMessage(400, "ALL Fields Are Required", false));
      }
      const validUser = await User.findOne({ email });
      if (!validUser) {
        // jodi data missing thake tokhon status code 404
        return next(errorMessage(404, "User Not Found", false));
      }
      try {
        const HashPassword = await validUser?.password;
        const isPasswordMatch = await CompareHashPassword(
          password,
          HashPassword
        );
        if (!isPasswordMatch) {
          return next(errorMessage(401, "Invalid User", false));
        }
      } catch (error) {
        return next(errorMessage(500, "INTERNAL SERVER ERROR", false));
      }

      const Payload = {
        userId: validUser._id,
        email,
      };

      const refreshToken = getRefreshToken(Payload);
      const accessToken = getAccessToken({ userId: validUser._id });
      const createCookie = getCookiePayload();

      await User.findByIdAndUpdate(validUser._id, {
        $push: {
          refreshToken: {
            token: refreshToken,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        },
      });

      res.cookie("refreshToken", refreshToken, createCookie);
      res.cookie("accessToken", accessToken, createCookie);

      // যখন আমি কোনো resource সফলভাবে পেয়ে যাবো বা successfully put/patch হলে বা কোন কিছু successfully delete হলে । মানে কোন অপারেশন  কিছু যখন সফল ভাবে সম্পন্ন হয় । 
      return res
        .status(200)
        .json({ message: "SignIn SuccessFully....", status: true });
    }catch(error){
        next(error); 
    }
}


const refreshToken = async(req, res, next)=>{
    try{

    // first of all cookie theke refreshToken TA nitesi 
    const RefreshTokenExist = req.cookies.refreshToken;

    if (!RefreshTokenExist) {
        // jodi cookie ta na thake tahole error dibo 
      return next(errorMessage(401, "Please Login Again", false));
    }
    let ValidRefreshToken;
    try {
        // valid ki na check kortesi 
      ValidRefreshToken = validRefreshToekn(RefreshTokenExist);
      if (!ValidRefreshToken) {
        // na hole error 
       return next(errorMessage(401, "Please Login Again", false));
      }
    } catch (error) {
      next(error);
    }

    // valid jehetu tai er vitore user id ache seta nitesi 
    const UserId = ValidRefreshToken.userId;


    
    const user = await User.findById(UserId);
    // token theke je userId use kore user peyechi ei user ta authentic ki na ta check kortesi 
    if(!user){
        return next(errorMessage(401, "Please Login Again", false));
    }

    //  ekhon user er vitore je refresh token array ta ache ta niyechi 
    const StoreRefreshToken = user?.refreshToken;


    //  ekhon ei array te amar refresh token ta ache kina ta find kortesi 
    const ExistRefreshToken = StoreRefreshToken?.find((t) => {
      return t?.token === RefreshTokenExist;
    });

    //  jodi na thake tahole abar error ditesi 
    if (!ExistRefreshToken) {
      return next(errorMessage(401, "Please Login Again", false));
    }

    //  jodi thake kintu expire hoye giyeche tahole abar error ditesi 
    if (new Date(ExistRefreshToken.expiresAt) < Date.now()) {
      return next(errorMessage(401, "Please Login Again", false));

    }
    const payload = {
      userId: user._id,
      email: user.email,
    };

    
    const createCookie = getCookiePayload();
    
    // accesstoken generate kortesi 
    const accessToken = getAccessToken(payload);
    res.cookie("accessToken", accessToken, createCookie);

    // jodi succefully kichu create hoy tokhon 201
    return res
      .status(200)
      .json({
        message: "New AccessToken Generate",
        status: true,
        status_code: 201,
      }); 



    }catch(error){
        next(error) ; 
    }

}

const sendOTP = async(req,res) =>{
  try{
 const { email } = req.body;
 if ((!email || email === "")) {
   return res.status(400).json({ message: "All Fields Are Required..." });
  }
  // res.json({"email: ":  email});
  const newUser = await User.findOne({ email });
  // res.json({"NewUser: ": newUser}) ; 
 if (!newUser) {
   return res.status(400).json({ message: "User Does Not Find..." });
 }
 const otp = (Math.floor(Math.random() * 9999999) + 1000000).toString();
//  res.json({"OTP": otp});
 newUser.resetOtp = otp;
 newUser.otpExpired = new Date(Date.now() + 5*60*1000);
 newUser.isOtpVerified = false;
//  res.json({newUser});
 await newUser.save();
 await sendOtpEmail(email, otp);
 return res.status(200).json({message : "OTP SEND SUCCESSFULLY" , status : true , newUser});

  }catch(error){
    return res.status(500).json({message: "INTERNAL SERVER ERROR..."}) ; 
  }
}

const verfiyOtp = async(req,res)=>{
  try{
    const {email , otp} = req.body ; 
    if(!email || !otp || email == "" || otp == ""){
      return res.status(400).json({message : "PLEASE FILL UP OTP"});
    }
    const user = await User.findOne({email}) ; 
    if(!user){
      return res.status(400).json({message : "USER DOES NOT EXIST"});
    }
    if (user.resetOtp !== otp) {
      return res.status(401).json({message : "INVALID OTP"})
    }
    if(user.otpExpired < Date.now()){
      return res.status(401).json({message : "OTP EXPIRED... RESEND OTP"}) ; 
    }

    user.otpExpired = undefined ; 
    user.isOtpVerified = true ; 
    user.resetOtp = undefined ; 


    await user.save() ; 

    return res.status(200).json({message : "OTP VERIFIED SUCCESSFULLY... ", status : true }); 


  }catch(error){
    return res.status(500).json({message : "INTERNAL SERVER ERROR"});
  }
}


const resetOtp = async(req, res)=>{
  try{
    const {email , Newpassword} = req.body; 
    if(!email || !Newpassword || email == "" || Newpassword==""){
      return res.status(400).json({message : "ALL FIELDS REQUIRED"});
    }
    const UserFind = await User.findOne({email}) ; 
    if(!UserFind){
      return res.status(404).json({message : "User NOt Find"}) ; 
    }
    if(!UserFind.isOtpVerified){
      return res.status(401).json({message : "OTP IS NOT VERIFIED"});
    }
    const HashPassword = await HashPasswordGen(Newpassword) ; 
    UserFind.password = HashPassword; 
    UserFind.isOtpVerified = false; 
    await UserFind.save() ; 
    return res.status(200).json({message : "RESET PASSWORD SUCCESSFULLY..." , status : true});

  }catch(error){
    return res.status(500).json({message : "Internal Server Error" , status: false});
  }
}



module.exports = { signUp, signIn, refreshToken, sendOTP , verfiyOtp , resetOtp };