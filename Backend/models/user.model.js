const mongoose = require('mongoose') ; 
const userSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    // OTP PART START
    resetOtp : {
      type : String , 
    },
    isOtpVerified : {
      type : Boolean , 
      default : false , 
    },
    otpExpired : {
      type : Date, 
    },
    // OTP PART END


    refreshToken: [
      // refreshToken ja longterm hoy ar database e save thake
      // longterm & save database
      {
        token: {
          type: String,
          required: true,
        },
        expiresAt: {
          type: Date,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User; 