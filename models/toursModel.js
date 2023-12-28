const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
    },
    duration: {
      type: Number,
      required: [true, 'Tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'Tour must have a group size'],
    },
    difficulty: {
      type: String, 
      required: [true, 'Tour must have difficulty'],
    },
    ratingsAverage: { type: Number, default: 4.5 },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: { type: Number, required: [true, 'A tour must have a price'] },
    summary: {
      type: String,
      trim: true,
      required: [true, 'Description is required'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'Imagecover is required'],
    },
    images: [String],
    startDates: [Date],
  },
  { timestamps: true }
);

tourSchema.index({ name: 1, difficulty: 1 })
module.exports = mongoose.model('Tour', tourSchema);
