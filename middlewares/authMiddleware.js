const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const User = require("../models/usersModel")

const authMiddleware = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('Please log in first', 401));
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = await User.findById(decoded.id)
    next();
  } catch (err) {
    return next(new AppError('Invalid or expired token', 401));
  }
};

const roleAccess = (...roles) =>{
  return (req, res, next) =>{
    if(!roles.includes(req.user.role)){
      next(new AppError("You dont have the permission to do this", 401))
    }
    next()
  }
}

module.exports = {authMiddleware, roleAccess};
