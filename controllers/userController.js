const User = require("../models/usersModel");
const { catchAsync } = require("../utils/catchAsync");

const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find()
  res.status(200).json({
    messsage : "Users Found",
    users
  });
});

const addAUser = (req, res) => {};

const getOneUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.status(200).json({
    status: 'Success',
    user,
  });
});
const updateUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = {getAllUsers, getOneUser, updateUser, deleteUser, addAUser}
