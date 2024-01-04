const express = require('express');
const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  addAUser,
} = require('../controllers/userController');
const { signUp } = require('../controllers/authController');
const userRouter = express.Router();

userRouter.route("/signup").post(signUp)

userRouter.route('/').get(getAllUsers);
userRouter.route('/').post(addAUser);
userRouter.route('/:id').get(getOneUser);
userRouter.route('/:id').patch(updateUser);
userRouter.route('/:id').delete(deleteUser);

module.exports = userRouter;
