const Tour = require('../models/toursModel.js');
const {catchAsync} = require('../utils/catchAsync.js');

//GET ALL TOURS
const getAllTours = catchAsync(async (req, res) => {
  let query = { ...req.query };
  // let excluded_fields = ['sort', 'page', 'limit', 'fields'];
  // excluded_fields.forEach((item) => delete query[item]);

  //FOR FIELDS
  let fieldsToSelect;
  if (req.query.fields) {
    fieldsToSelect = req.query.fields.split(',');
  }

  //FOR PAGINATION
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const tours = await Tour.find(query)
    .sort(req.query.sort)
    .skip((page - 1) * limit)
    .limit(limit)
    .select(fieldsToSelect);

  res.status(201).json({
    message: 'Tours Found',
    results: tours.length,
    tours,
  });
});

//GET ONE TOUR
const getOneTour = catchAsync(async (req, res) => {
  const id = req.params.id;
  const tour = await Tour.findById({ _id: id });
  res.status(200).json({
    status: 'Tour Found',
    tour,
  });
});

//ADD TOUR
const addATour = catchAsync(async (req, res, next) => {
  const body = req.body;
  const tour = await Tour.create(body);
  res.status(201).json({
    status: 'Tour Added',
    tour,
  });
});

// UPDATE A TOUR
const updateTour = catchAsync(async (req, res) => {
  const id = req.params.id;
  const tour = await Tour.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'Tour Updated',
    tour,
  });
});

//DELETE A TOUR
const deleteTour = catchAsync(async (req, res) => {
    const id = req.params.id;
    await Tour.findByIdAndDelete(id);
    res.status(204).json({});
});

const getStats = (req, res) => {};
module.exports = { getAllTours, addATour, deleteTour, updateTour, getOneTour };
