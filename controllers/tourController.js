const Tour = require('../models/toursModel');
const getAllTours = async (req, res) => {
  const tours = await Tour.find();
  res.status(200).json({
    status: 'sucesss',
    results: Tour.length,
    tours,
  });
};

const getOneTour = (req, res) => {
  const id = req.params.id;
  const tour = tours.find((el) => el.id == id);
  res.status(200).json({
    status: 'success',
    tour,
  });
};

const addATour = async (req, res) => {
  const tour = await Tour.create({
    name: req.body.name,
    rating: req.body.rating,
    price: req.body.price,
  });
  res.status(200).json({
    status: 'Success',
    tour,
  });
};
const updateTour = (req, res) => {
  const id = req.params.id;
  if (id > tours.length - 1) {
    return res.status(404).json({
      status: 'Failed',
      message: 'Invalid ID',
    });
  }
};
const deleteTour = (req, res) => {
  const id = req.params.id;
  if (id > tours.length - 1) {
    return res.status(404).json({
      status: 'Failed',
      message: 'Invalid ID',
    });
  }
};

module.exports = { getAllTours, addATour, deleteTour, updateTour, getOneTour };
