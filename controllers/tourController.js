const Tour = require('../models/toursModel.js');

//GET ALL TOURS
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(201).json({
      message: 'Tours Found',
      results: Tour.length,
      tours,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Tours Not Found',
    });
  }
};

//GET ONE TOUR
const getOneTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById({ _id: id });
    res.status(200).json({
      status: 'Tour Found',
      tour,
    });
  } catch (error) {
    res.status(404).send('Tour not found');
  }
};

//ADD TOUR
const addATour = async (req, res) => {
  try {
    const body = req.body;
    const tour = await Tour.create(body);
    res.status(200).json({
      status: 'Tour Added',
      tour,
    });
  } catch (error) {
    res.status(400).send(error);
  }
}; 

// UPDATE A TOUR
const updateTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'Tour Updated',
      tour,
    });
  } catch (error) {
    res.status(501).json({
      status: 'Tour Not Updated'
    });
  }
};

//DELETE A TOUR
const deleteTour = async (req, res) => {
  try {
    const id = req.params.id; 
    await Tour.findByIdAndDelete(id)
    res.status(204)
  } catch (error) {
    res.status(400).send("Something wrong happened")
  }
  
};

module.exports = { getAllTours, addATour, deleteTour, updateTour, getOneTour};
