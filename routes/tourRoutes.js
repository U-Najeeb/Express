const express = require('express');
const tourRouter = express.Router();
const {
  getAllTours,
  getOneTour,
  updateTour,
  deleteTour,
  addATour,
} = require('../controllers/tourController');
const {authMiddleware, roleAccess} = require('../middlewares/authMiddleware');

tourRouter.route('/').get(authMiddleware,getAllTours)
tourRouter.route('/').post(addATour);
tourRouter.route('/:id').get(getOneTour)
tourRouter.route('/:id').patch(updateTour)
tourRouter.route('/:id').delete(authMiddleware,roleAccess("admin", "lead-guide"), deleteTour);

module.exports = tourRouter;
