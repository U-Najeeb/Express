const express = require('express');
const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  addAUser,
} = require('../controllers/userController');
const { signUp, login, forgotPassword } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const userRouter = express.Router();

userRouter.route("/signup").post(signUp)
userRouter.route("/login").post(login)

userRouter.route("/forgotPassword").post(forgotPassword)
userRouter.route("/resetPassword").post()

userRouter.route('/').get(getAllUsers);
userRouter.route('/').post(addAUser);
userRouter.route('/:id').get(getOneUser);
userRouter.route('/:id').patch(updateUser);
userRouter.route('/:id').delete(deleteUser);


module.exports = userRouter;
