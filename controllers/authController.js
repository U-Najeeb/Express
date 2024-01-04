const User = require('../models/usersModel');
const { catchAsync } = require('../utils/catchAsync');

const signUp = catchAsync(async (req, res, next) => {
  const body = req.body;
  const newUser = await User.create(body);
  res.status(201).json({
    message: 'User Created',
    user : newUser,
  });
});

module.exports = { signUp };
