const express = require('express');
const tourRouter = express.Router();
const {
  getAllTours,
  getOneTour,
  updateTour,
  deleteTour,
  addATour,
} = require('../controllers/tourController');

tourRouter.route('/').get(getAllTours)
tourRouter.route('/').post(addATour);
tourRouter.route('/:id').get(getOneTour)
tourRouter.route('/:id').patch(updateTour)
tourRouter.route('/:id').delete(deleteTour);

module.exports = tourRouter;
