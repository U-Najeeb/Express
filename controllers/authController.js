const User = require('../models/usersModel');
const { catchAsync } = require('../utils/catchAsync');
const jwt = require("jsonwebtoken")
const AppError = require("../utils/appError")
const mongoose = require("mongoose")
const sendEmail = require("../utils/email")

const signUp = catchAsync(async (req, res, next) => {
  const body = req.body;
  const newUser = await User.create({
    name : body.name,
    email : body.email,
    password : body.password,
    passwordConfirm : body.passwordConfirm
  });

  const token = jwt.sign({id : newUser._id}, 'secret')

  res.status(201).json({
    message: 'User Created',
    token,
    user : newUser,
  });
});

const login = catchAsync(async (req, res, next)=>{

  const {email, password} = req.body

  if(!email || !password){
    return next(new AppError("Please enter email and password"))
  }

  const user = await User.findOne({email}).select("+password")
  
  if(!user || !await user.correctPassword(password, user.password)){
    return next(new AppError("Incorrect email or password", 401))
  }
  
  const token = jwt.sign({id : user._id}, 'secret')
  res.status(200).json({
    message : "Success",
    token
  })
})

const forgotPassword = catchAsync(async(req, res, next)=>{
  const email = req.body.email
  const user =  await User.findOne({email})
  if(!user){
    return next(new AppError("There is no user with this email", 404))
  }
  const resetToken = user.createPasswordResetToken()
  await user.save({validateBeforeSave : false})

  const resetURL = `${req.protocol}://${req.get("host")}/api/v1/users/resetPassword/${resetToken}`
  const message = `Forgot your password? Copy this link to reset your password ${resetURL}`

  try {
    await sendEmail({
      email : user.email,
      subject : "Your Password reset token is valid for 10min",
      message
    })
    res.status(200).json({
      message : "Token Sent"
    })
  } catch (error) {
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined

    await user.save({validateBeforeSave : false})

    return next(new AppError("Error sending email try again later"))
  }
})  
module.exports = { signUp, login, forgotPassword};
